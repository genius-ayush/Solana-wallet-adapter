import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

function ShowBalance() {

    const {connection} = useConnection() ; 
    const wallet =  useWallet() ; 
    const publickey = wallet.publicKey
    const [balance , setBalance] = useState<number | null>() ; 
    async function  getMeUserBalance() {

        if(!publickey){
            return ; 
        }
        
        const response = await connection.getBalance(publickey ) ;  
        const solBalance = response/LAMPORTS_PER_SOL ; 
        setBalance(solBalance) ; 
    }

    useEffect(()=>{
        getMeUserBalance() ; 
    } , [wallet.publicKey])
    
  return (
    <Button>{balance !== null ? balance : "No balance yet"} SOL</Button >
  )
}

export default ShowBalance