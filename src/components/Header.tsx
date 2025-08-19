"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useMemo, useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { Wallet, LogOut } from "lucide-react"; // icons
import { WalletButton } from "./WalletButton";

function shortenAddress(addr: string, chars = 4) {
  if (!addr) return "";
  return `${addr.slice(0, chars)}…${addr.slice(-chars)}`;
}

export function Header() {
  const { connected, disconnect , publicKey} = useWallet();
  const { setVisible } = useWalletModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const short = useMemo(
    () => (publicKey ? shortenAddress(publicKey.toBase58(), 4) : ""),
    [publicKey]
  );


  return (
      <Navbar className="">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          {/* <NavItems items={navItems} /> */}
          <div className="flex items-center gap-4 relative z-50">

            <ModeToggle/>
            
            <WalletButton/>
            
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-4">
              <ModeToggle/>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            
            <div className="flex w-full flex-col gap-4">
              
              
              <WalletButton/>

              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

  );
}


