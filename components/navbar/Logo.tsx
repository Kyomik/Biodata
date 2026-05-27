import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative flex group"
      aria-label="Ilha — Home"
    >
      <svg
        width="48"
        height="36"
        viewBox="0 0 48 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="slow"
      >
        <rect x="0" y="0" width="4" height="36" fill="white" />
        <rect x="0" y="0" width="12" height="4" fill="white" />
        <rect x="0" y="32" width="12" height="4" fill="white" />
        <rect x="20" y="0" width="4" height="36" fill="white" />
        <rect x="20" y="32" width="28" height="4" fill="white" />

        <rect
          x="40"
          y="0"
          width="8"
          height="8"
          className="fill-accent transition-all duration-fast group-hover:translate-x-1"
        />
      </svg>
    </Link>
  );
};