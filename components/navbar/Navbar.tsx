"use client";

import { useState, useEffect } from "react";
import { SlidingBackground } from "./desktop/SlidingBackground";
import { Logo } from "./Logo";
import { Burger } from "./mobile/Burger";
import { NavLinks } from "./NavLinks";
import { MobileDrawer } from "./mobile/MobileDrawer";
import { DesktopTriangle } from "./desktop/DesktopTriangle";
import { MobileBackdrop } from "./mobile/MobileBackdrop";
import { useDesktop } from "../../hooks/useDesktop";
import { useCloseOnScroll } from "../../hooks/useCloseOnScroll";
import { navLinks } from "./data";

export const Navbar = () => {
  const [bgX, setBgX] = useState("100%");
  const [menuOpen, setMenuOpen] = useState(false);
  const isDesktop = useDesktop();

  useEffect(() => {
    if (isDesktop && menuOpen) setMenuOpen(false);
  }, [isDesktop, menuOpen]);

  useCloseOnScroll({ isOpen: menuOpen, onClose: () => setMenuOpen(false) });

  return (
    <header className="fixed top-0 left-0 w-full h-19 flex z-999 max-sm:h-15">
      <SlidingBackground bgX={bgX} />

      <nav className="cursor-default bg-three/60 flex-12 pl-7 flex items-center max-sm:bg-secondary max-sm:px-2">
        <div className="flex-[3] flex justify-start pl-3 sm:pl-0">
          <Logo />
        </div>
        <div className="flex-5 max-sm:flex max-sm:justify-end">
          <NavLinks
            links={navLinks}
            setBgX={setBgX}
            className="
                flex justify-around max-sm:hidden
                text-white/80 font-syne font-bold
            "/>
          <Burger open={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
        </div>
      </nav>

      <DesktopTriangle />
      <MobileDrawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileBackdrop isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
};