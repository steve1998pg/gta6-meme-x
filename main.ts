// gta6-meme-x-01: Post a GTA 6 meme on X.
// The meme itself is the entry. This program copies the meme image to the
// output directory so the entry can be verified locally. Node 22, standard
// library only, no network.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";

const out = "/output";
mkdirSync(out, { recursive: true });
const src = new URL("./meme.png", import.meta.url);
copyFileSync(src, `${out}/entry.png`);
// Verify the copy: the entry must be byte-for-byte identical to the meme.
const a = readFileSync(src);
const b = readFileSync(`${out}/entry.png`);
if (!a.equals(b)) throw new Error("entry.png does not match meme.png");
console.log(`meme written to /output/entry.png (${statSync(`${out}/entry.png`).size} bytes, verified)`);
console.log("post: https://x.com/steve1998pg/status/2124546144852463779");
