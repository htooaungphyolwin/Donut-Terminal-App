const ESC = "\u001b";

export const clearScreen = () => process.stdout.write(`${ESC}[2J`);
export const cursorHome  = () => process.stdout.write(`${ESC}[H`);
export const cursorTop   = () => process.stdout.write(`${ESC}[d`);
