export interface SubItem { 
    label: string; 
    href: string 
};

export interface SlidingBackgroundProps {
  bgX: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavLinksProps {
  links: NavLink[];
  setMenuOpen?: (open: boolean) => void;
  setBgX?: (x: string) => void;
  className?: string;
}

export interface MobileDrawerProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export interface BurgerProps {
  open: boolean;
  toggle: () => void;
}