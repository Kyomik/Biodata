import { NavLinks } from "../NavLinks";
import { navLinks } from "../data";
import { MobileDrawerProps } from "../navbar.types";
import { SocialButton } from "../../ui/SocialButton";

export const MobileDrawer = ({ menuOpen, setMenuOpen }: MobileDrawerProps) => {
  return (
    <div className={`
      fixed top-0 right-0 h-screen w-[75vw] max-w-[300px]
      bg-secondary border-l border-accent/15
      pt-16 pb-5 px-6 z-40 flex flex-col justify-between
      transition-transform duration-slow ease-snap
      ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      <div className="flex-1 overflow-y-auto">
        <NavLinks
          links={navLinks}
          setMenuOpen={setMenuOpen}
          className="
            flex flex-col gap-0 text-gray/70
            font-dm-mono text-[0.65rem] tracking-[0.18em]  
        "/>
      </div>

      <div className="flex flex-col gap-3">
        <div className="h-px bg-gray/25" />
        <div className="flex flex-row gap-2">
          <SocialButton href="https://github.com/Kyomik" platform="github" className="w-full justify-center" />
          <SocialButton href="https://www.instagram.com/kyoomik/" platform="instagram" className="w-full justify-center" />
        </div>
      </div>
    </div>
  );
};