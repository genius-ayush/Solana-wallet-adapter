import { useConnection, useWallet } from "@solana/wallet-adapter-react"

function Airdrop() {

    const wallet = useWallet() ; 
    const publicKey = wallet.publicKey  ; 
    const{connection} = useConnection();
    const sendAirdropToUser = async()=>{
        if(publicKey)
          await connection.requestAirdrop(publicKey , 100000000)

        alert('airdropped sol   ')
    }
  return (
    <div>
    <div>Airdrop</div>
    
    <div className="flex gap-2">
    <input type="text" placeholder="Amount" className="border"></input>
    <button className="border p-1" onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
    </div>
  )
}

export default Airdrop