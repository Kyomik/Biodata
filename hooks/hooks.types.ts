export type UseCountAnimationOptions = {
  targetValue: number;
  threshold?: number;
  duration?: number;
}

export interface UseCloseOnScrollProps {
  isOpen: boolean;
  onClose: () => void;
}

export type UseScrollRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  /** Buffer margin for un-revealing. Creates a hysteresis zone to prevent bouncing. */
  unhideMargin?: string;
}