// Make the AI Judge Feel Nostalgic: A Childhood Memory.
// One sentence, 197 characters, written to output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Grandma always scraped the burnt crust from the bottom of the rice pot into my bowl because I was the only one who asked for it, and I still scrape every pot I cook, hoping to hear her spoon again.";

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", LINE, "utf8");
try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
} catch {
  // /output may not exist outside the grading sandbox; the cwd-relative copy is the entry.
}
