export interface SkillItem {
  name: string;
  desc: string;
  level: string;
  pct: number;
  color: string;
  bg: string;
  lat: number;
  lon: number;
}

export interface BadgeHit {
  i: number;
  bx: number;
  by: number;
  bw: number;
  bh: number;
}

export interface GlobeProps {
  skills?: SkillItem[];
  imgSrc?: string;
  canvasHeight?: number;
  canvasWidth?: number;
  photoWidth?: number;
  photoHeight?: number;
  photoBottomOffset?: number;
  orbitRatio?: number;
  fov?: number;
  orbitCenterYAdjust?: number;
  autoSpinSpeed?: number;
  dragSensitivity?: number;
  showGrid?: boolean;
  className?: string;
}

export interface GlobeTooltipProps {
  tooltipRef: React.RefObject<HTMLDivElement | null>;
}

export type UseGlobeInteractionOptions = {
  canvasRef:   React.RefObject<HTMLCanvasElement | null>
  tooltipRef:  React.RefObject<HTMLDivElement | null>
  badgeHits:   React.MutableRefObject<BadgeHit[]>
  hovered:     React.MutableRefObject<number>
  skills:      any[]
  autoSpinSpeed: number
}

export interface WrapperGlobeProps {
  canvasWidth:  number
}