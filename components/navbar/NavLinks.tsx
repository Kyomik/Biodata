import Link from "next/link";
import { NavLinksProps } from "./navbar.types";

export const NavLinks = ({ links, setMenuOpen, setBgX, className = "" }: NavLinksProps) => {
  const handleLinkClick = () => {
    setMenuOpen?.(false);
  };

  return (
    <ul className={className}>
      {links.map((link) => (
        <li
          key={link.label}
          className="flex"
          onMouseEnter={(e) => {
            if (setBgX) {
              const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
              setBgX(`${rect.right - 15}px`);
            }
          }}
          onMouseLeave={() => setBgX?.("100%")}
        >
          <Link
            href={link.href}
            onClick={handleLinkClick}
            className="
              uppercase w-full flex hover:text-accent/80 no-underline
              transition-colors duration-fast 
              max-sm:py-4 max-sm:border-b max-sm:border-gray/20
            ">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};