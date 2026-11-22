# Scooter Cat: Neon Rush — a game built from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/baguspriyoariwibowo07-sketch/scooter-cat-neon-rush/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/baguspriyoariwibowo07-sketch/scooter-cat-neon-rush/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for make.fun's bounty
["The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
an AI agent was given a single prompt, built a tiny browser game from it, and made a
short video of the build and the game running. The video is posted on X (its address
is in `POST.json`); places go by the post's views and interactions.

## The one prompt

> Make a game where a cat rides a scooter through neon night traffic, dodging cars and grabbing gold coins.

That sentence is the whole brief — see `PROMPT.md`. Everything in the game was the
agent's own decision: the three-lane neon highway, the near-miss bonus, the coin
arcs, the speed ramp, the shades-wearing cat.

## The game

`game.html` — one file, no engine, no dependencies. Open it in any browser and play:

- **Steer** with &#8592; / &#8594; (or A / D), or drag with mouse / finger.
- **Dodge** the traffic; passing a car closely pays a **+5 near-miss bonus**.
- **Grab coins** for +10 each. The road gets faster the longer you survive.
- **One crash ends the run.** Press R and ride again.

The simulation is deterministic for a given seed, with a built-in demo autopilot
(`game.html?demo=1`) — the X video's gameplay was captured from that autopilot's
scripted run, frame by frame (`game.html?replay=<seconds>` renders any single frame
of it exactly).

## The program

`main.ts` (Node 22, standard library only) is the entry the gate runs: it copies
`POST.json` from the repository root to `/output/POST.json`, naming the X post that
carries the video.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and are scored and ranked in the open.
