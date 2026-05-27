import { useEffect } from "react";
import { UseCloseOnScrollProps } from "./hooks.types";

export const useCloseOnScroll = ({ isOpen, onClose }: UseCloseOnScrollProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handler = () => onClose();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isOpen, onClose]);
};