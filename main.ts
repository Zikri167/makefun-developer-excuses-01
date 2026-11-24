import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny single-line developer excuse for when code breaks in production.
// Twist lands in the last words: the "fix" was the thing keeping prod alive.
const EXCUSE: string = "I fixed the typo \u2014 turns out that typo was load-bearing.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  throw new Error("excuse must be a single line");
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse must not be only whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
