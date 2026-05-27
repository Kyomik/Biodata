export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface ProjectedPoint {
  px: number;
  py: number;
  z: number;
  scale: number;
}

export const sphToCart = (latDeg: number, lonDeg: number, r: number): Point3D => {
  const lat = (latDeg * Math.PI) / 180;
  const lon = (lonDeg * Math.PI) / 180;
  return {
    x: r * Math.cos(lat) * Math.cos(lon),
    y: r * Math.sin(lat),
    z: r * Math.cos(lat) * Math.sin(lon),
  };
};

export const rotatePoint = (p: Point3D, rx: number, ry: number): Point3D => {
  const { x, y, z } = p;
  const y2 = y * Math.cos(rx) - z * Math.sin(rx);
  const z2 = y * Math.sin(rx) + z * Math.cos(rx);
  const x3 = x * Math.cos(ry) + z2 * Math.sin(ry);
  const z3 = -x * Math.sin(ry) + z2 * Math.cos(ry);
  return { x: x3, y: y2, z: z3 };
};

export const projectPt = (
  p: Point3D,
  cx: number,
  cy: number,
  fov: number,
  R: number
): ProjectedPoint => {
  const sc = fov / (fov + p.z + R);
  return { px: cx + p.x * sc, py: cy + p.y * sc, z: p.z, scale: sc };
};

export const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
};