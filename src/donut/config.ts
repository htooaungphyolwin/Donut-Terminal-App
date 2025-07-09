export const SCALE  = 1;    // 1 ⇒ ~80×22 chars. Use 0.5 / 2 to shrink / enlarge
export const SPEED  = 1;    // 1 = normal, <1 slower, >1 faster (multiplier)
export const FPS    = 30;   // target frame‑rate (24, 30, 60 …)

export const WIDTH  = Math.floor(SCALE * 80);   // columns
export const HEIGHT = Math.floor(SCALE * 22);   // rows
export const TAU    = Math.PI * 2;              // 2π

export const ROT_SPEED = TAU;                 // rad/s (one rev per second)
export const LUM_TABLE = ".,-~:;=!*#$@";      // // 12 luminance chars

export const N_PIXELS  = WIDTH * HEIGHT;
