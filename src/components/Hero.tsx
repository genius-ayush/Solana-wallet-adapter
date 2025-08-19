"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export default function Hero() {
  const publicKey = useWallet().publicKey ; 
  const {connection} = useConnection(); 
  const [lamports, setLamports] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleAirdrop = async () => {
    if (!publicKey || !lamports) {
      setMessage("⚠️ Please enter a valid  lamports")
      return
    }

    try {
      setLoading(true)
      setMessage("Requesting airdrop... ⏳")

      // here you will call your backend or Solana devnet airdrop function
    await connection.requestAirdrop(publicKey , parseInt(lamports))

    setMessage(`✅ Successfully airdropped ${lamports} lamports to ${publicKey}`)
        setLoading(false)
    } catch (err) {
      setMessage("❌ Airdrop failed. Try again.")
      setLoading(false)
    }
  }

  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Solana Faucet 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Instantly airdrop <span className="text-violet-400 font-semibold">SOL (lamports)</span> 
          to your wallet on <span className="text-green-400">Devnet</span>.
        </p>
      </motion.div>

      <Card className="mt-10 w-full max-w-lg bg-zinc-900/60 border border-zinc-700 backdrop-blur-xl">
        <CardContent className="p-6 flex flex-col gap-4">
          
          <Input
            placeholder="Amount in Lamports"
            type="number"
            value={lamports}
            onChange={(e) => setLamports(e.target.value)}
            className="bg-zinc-800 border-zinc-700 text-white placeholder-gray-500"
          />
          <Button
            onClick={handleAirdrop}
            disabled={loading}
            className="bg-violet-600 hover:bg-violet-700 text-white font-medium flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            {loading ? "Processing..." : "Request Airdrop"}
          </Button>

          {message && (
            <p className="text-sm mt-2 text-gray-300">{message}</p>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
