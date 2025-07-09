import { WIDTH, HEIGHT } from "./config";
import { scr } from "./buffers";
import { cursorHome } from "./ansi";
export const flushFrame = (fps: number): void => {
  cursorHome();
  process.stdout.write(`FPS: ${fps.toFixed(2)}  \n`);
  // cursorTop(); // reset scroll pos like original "[d"

  let out = "";
  const n = WIDTH * HEIGHT;
  for (let k = 0; k < n; k++) {
    out += scr[k];
    if ((k + 1) % WIDTH === 0) out += "\n";
  }
  process.stdout.write(out);
};

export const printSpacing = (lines: number) => {
  process.stdout.write('\n'.repeat(lines));
};