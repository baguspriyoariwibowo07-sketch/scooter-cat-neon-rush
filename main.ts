// Entry program for the make.fun bounty "The agent builds a game from one prompt"
// (Node 22, standard library only, no network, no clock: same bytes every run).
//
// The entry itself is a post on X: a short video of an AI agent building the tiny
// browser game in this repository (game.html) from the single prompt in PROMPT.md,
// ending with make.fun's referral end card. POST.json at the repository root names
// the post's address, and the house reads the post's views and interactions from X.
// All this program has to do is hand that address to the gate: copy POST.json from
// the repository root to /output/POST.json.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in
// for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
