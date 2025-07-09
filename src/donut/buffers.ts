import { N_PIXELS } from "./config";

export const zBuf: number[]  = new Array(N_PIXELS);
export const scr: string[]   = new Array<string>(N_PIXELS).fill(" ");

export const resetBuffers = (): void => {
  zBuf.fill(0);
  scr.fill(" ");
};
