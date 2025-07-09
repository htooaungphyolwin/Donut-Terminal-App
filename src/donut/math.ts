import {
  WIDTH,
  HEIGHT,
  SCALE,
  ROT_SPEED,
  TAU,
  LUM_TABLE
} from "./config";
import { zBuf, scr } from "./buffers";

/** Update rotation angles */
export const updateAngles = (
  Ax: number,
  Ay: number,
  dt: number,
  speed: number,
): [number, number] => [Ax + ROT_SPEED * speed * dt, Ay + ROT_SPEED * speed * dt];

/** Render the donut into the buffers */
export const projectDonut = (Ax: number, Ay: number): void => {
  for (let theta = 0; theta < TAU; theta += 0.07) {
    const costheta = Math.cos(theta);
    const sintheta = Math.sin(theta);

    for (let phi = 0; phi < TAU; phi += 0.02) {
      const sinphi = Math.sin(phi);
      const cosphi = Math.cos(phi);
      const cosjtheta2 = costheta + 2;

      const sinAx = Math.sin(Ax);
      const cosAx = Math.cos(Ax);
      const sinAy = Math.sin(Ay);
      const cosAy = Math.cos(Ay);

      const depth =
        1 / (sinphi * cosjtheta2 * sinAx + sintheta * cosAx + 5);
      const t = sinphi * cosjtheta2 * cosAx - sintheta * sinAx;

      const x = Math.floor(
        WIDTH / 2 +
          SCALE * 30 * depth * (cosphi * cosjtheta2 * cosAy - t * sinAy),
      );
      const y = Math.floor(
        HEIGHT / 2 +
          SCALE * 15 * depth * (cosphi * cosjtheta2 * sinAy + t * cosAy),
      );

      const idx = x + WIDTH * y;

      const lum = Math.floor(
        8 *
          ((sintheta * sinAx - sinphi * costheta * cosAx) * cosAy -
            sinphi * costheta * sinAx -
            sintheta * cosAx -
            cosphi * costheta * sinAy),
      );

      if (
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        depth > zBuf[idx]
      ) {
        zBuf[idx] = depth;
        scr[idx] = lum > 0 ? LUM_TABLE[lum] : ".";
      }
    }
  }
};
