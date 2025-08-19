"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import {  useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { WalletButton } from "./WalletButton";



export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  

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


