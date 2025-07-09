import { performance } from "node:perf_hooks";
import { FPS, SPEED } from "./config";
import { resetBuffers } from "./buffers";
import { projectDonut, updateAngles } from "./math";
import { flushFrame } from "./renderer";

export const startLoop = (): void => {
  let Ax = 0;   // rotation around X (rad)
  let Ay = 0;   // rotation around Y (rad)
  let last = performance.now();

  const frame = () => {
    const now = performance.now();
    const dt = (now - last) / 1000;
    last = now;

    resetBuffers();
    projectDonut(Ax, Ay);
    flushFrame(1 / dt);
    [Ax, Ay] = updateAngles(Ax, Ay, dt, SPEED);

    setTimeout(frame, 1000 / FPS);
  };

  frame();
};
