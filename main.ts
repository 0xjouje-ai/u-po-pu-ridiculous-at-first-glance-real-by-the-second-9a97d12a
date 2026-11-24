// Ridiculous at First Glance, Real by the Second
// Writes one pitch sentence (<= 200 characters) to /output/entry.txt.
// Deterministic, Node stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Hire a stranger's grandmother to video-call your kids and nag them into eating vegetables: children obey grandma and ignore their parents, so exhausted parents gladly pay $9 a call.";

if (PITCH.length > 200) {
  throw new Error(`pitch is ${PITCH.length} characters, over the 200 limit`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch is empty");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
console.log(`wrote ${PITCH.length}-character pitch to /output/entry.txt`);
