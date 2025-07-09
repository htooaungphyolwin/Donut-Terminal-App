import readline from "node:readline";
import { clearScreen } from "./ansi";
import { startLoop } from "./loop";
import { printSpacing } from "./renderer";

/* --- terminal setup & clean exit --- */
clearScreen();
printSpacing(5);
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (_str, key) => {
  if (key.sequence === "\u0003") {
    console.log("\nExiting…");
    process.exit();
  }
});

/* --- kick‑off --- */
startLoop();
