import './App.css'

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { ThemeProvider } from './components/ui/theme-provider';
import Landing from './components/Landing';

function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/WD0bp8fzGoX7oGVplbbqc"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Landing />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  )
}

export default App
