# Corpus — Phi's distilled slipbox

This folder is the bridge between Phi's local slipbox (`5_Slipbox/` in the Cowork sandbox
on his machine) and this repo's cloud sessions, which can't see his filesystem.

Cloud sessions building products MUST read this folder first for voice, ideas, and frameworks.

## Files
| File | Contents | Refreshed by |
|---|---|---|
| `VOICE.md` | How Phi actually talks/teaches — phrases, analogies, stances | local distill run |
| `FRAMEWORKS.md` | Phi's mental models & teaching frameworks worth productizing | local distill run |
| `SEEDS.md` | Raw product ideas mined from fleeting notes, each tagged with a product line | local distill run |

## How to refresh (run on Phi's machine)
Open a Claude session in the Cowork sandbox and paste `corpus/DISTILL_PROMPT.md`.
It reads the slipbox, updates these files in a local clone of this repo, and pushes.
Re-run whenever the slipbox has grown — monthly is plenty.

## Rules
- Distilled and curated, never a raw dump — no personal/private material, no names,
  no therapy content, nothing Phi wouldn't put in a published product.
- Every SEEDS.md entry cites its source note filename so Phi can trace it back.
