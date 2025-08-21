import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
import { useState } from "react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

function SendTokens() {

    const [amount, setAmount] = useState("");
    const [sendAddress, setSendAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const wallet = useWallet(); 
    const {connection} = useConnection() ; 
    const sendSol = async() => {

        if (!wallet.publicKey) {
            throw new Error("Wallet not connected");
          }

        try{
            setLoading(true) ; 
            setMessage("Processing transaction...⏳")

            const transaction = new Transaction() ;  
        transaction.add(
            SystemProgram.transfer({
               
                fromPubkey : wallet.publicKey , 
                toPubkey : new PublicKey(sendAddress) , 
                lamports : parseInt(amount) * LAMPORTS_PER_SOL,
            }))
        

        await wallet.sendTransaction(transaction , connection) ; 

        setMessage(`✅ Successfully send ${amount} SOL to ${sendAddress}`)
        setLoading(false) ; 
        }catch(error){
            setMessage("❌ Transaction failed. Try again.")
            setLoading(false) ; 
        }
        
        

        
         
    }
    return (
        <section className="w-full min-h-[90vh] flex flex-col items-center justify-center 
      bg-gradient-to-b from-gray-50 via-white to-gray-100 
      dark:from-black dark:via-zinc-900 dark:to-black px-6">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl"
            >
                <h1 className="text-5xl font-extrabold tracking-tight 
          text-gray-900 dark:text-white">
                    Send Sol  💸
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Instantly send  <span className="text-violet-600 dark:text-violet-400 font-semibold">SOL </span>
                    to any wallet on <span className="text-green-600 dark:text-green-400">Devnet</span>.
                </p>
            </motion.div>

            <Card className="mt-10 w-full max-w-lg 
        bg-white/70 border border-gray-200 backdrop-blur-xl 
        dark:bg-zinc-900/60 dark:border-zinc-700">
                <CardContent className="p-6 flex flex-col gap-4">
                    <Input
                        placeholder="Amount in Lamports"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-400
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:placeholder-gray-500"
                    />

                    <Input
                        placeholder="Enter the PublicKey"
                        value={sendAddress}
                        onChange={(e) => setSendAddress(e.target.value)}
                        className="bg-white border-gray-300 text-gray-900 placeholder-gray-400
              dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:placeholder-gray-500"
                    />
                    <Button
                        onClick={sendSol}
                        disabled={loading}
                        className="bg-violet-600 hover:bg-violet-700 text-white font-medium flex items-center gap-2 
              dark:bg-violet-500 dark:hover:bg-violet-600"
                    >
                        <Send className="w-4 h-4" />
                        {loading ? "Processing..." : "Request Airdrop"}
                    </Button>

                    {message && (
                        <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">{message}</p>
                    )}
                </CardContent>
            </Card>
        </section>
    )
}

export default SendTokens