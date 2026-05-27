import { forwardRef, ReactNode } from "react";

export interface WidgetProps {
  children: ReactNode;
  className?: string;
}

export const Widget = forwardRef<HTMLDivElement, WidgetProps>(
  ({ children, className = "" }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex flex-col items-center transition-colors duration-fast group ${className}`}
      >
        {children}
      </div>
    );
  }
);

Widget.displayName = 'Widget';