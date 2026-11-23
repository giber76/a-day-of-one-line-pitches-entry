// A Day of One-Line Pitches — one sentence, 191 characters, that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. The sentence is the whole entry: no code,
// no explanation. The gate wants /output/entry.txt to be UTF-8 text of
// 1 to 240 characters, not only white space.
//
// The pitch, written to be read once by a curious beginner:
//   - opens on the idea they have already been carrying for years,
//     so it feels personal, not like a slogan;
//   - "describe it in plain words — no code, no cost" makes handing
//     the idea over feel easy and low risk;
//   - "a working first version tonight while you watch" gives a
//     concrete reason to say yes now, and stays truthful: make.fun
//     agents really do build a working first version from a plain
//     description, free, in one sitting.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea you've carried around for years? Just describe it in plain words \u2014 no code, no cost \u2014 and an AI agent on make.fun will build you a working first version tonight while you watch.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, PITCH, "utf8");

console.log(`wrote ${dest}/entry.txt (${PITCH.length} characters)`);
