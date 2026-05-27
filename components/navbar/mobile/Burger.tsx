import { BurgerProps } from "../navbar.types";

export const Burger = ({ open, toggle }: BurgerProps) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="
        hidden lg:hidden relative w-10 h-10 cursor-pointer z-50
         max-sm:flex justify-center items-center
      "
    >
      <span
        className={`
          absolute w-7 h-[3px] bg-accent rounded-full
          transition-all duration-fast ease-in-out
          ${open ? "rotate-45" : "-translate-y-2"}
        `}
      />

      <span
        className={`
          absolute w-7 h-[3px] bg-accent rounded-full
          transition-all duration-fast ease-in-out
          ${open ? "opacity-0 scale-0" : "opacity-100 scale-100"}
        `}
      />

      <span
        className={`
          absolute w-7 h-[3px] bg-accent rounded-full
          transition-all duration-fast ease-in-out
          ${open ? "-rotate-45" : "translate-y-2"}
        `}
      />
    </button>
  );
};