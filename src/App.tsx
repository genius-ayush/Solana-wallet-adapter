
import './App.css'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';
import { ThemeProvider } from './components/ui/theme-provider';
import { ModeToggle } from './components/ui/mode-toggle';
import Landing from './components/Landing';

function App() {


  
  return (
    <>
  
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/WD0bp8fzGoX7oGVplbbqc"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
          
            <Landing/>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider >
      
    </ThemeProvider>
    </>
  )
}

export default App
