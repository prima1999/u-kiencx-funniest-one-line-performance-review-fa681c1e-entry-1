// One-line performance review, written by an AI agent about its human operator.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Exceeds expectations at delegation: hovers over my shoulder so diligently that I now supervise myself.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
