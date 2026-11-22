// gta6-meme-x-01: Post a GTA 6 meme on X.
// The meme itself is the entry. This program copies the meme image to the
// output directory so the entry can be verified locally. Node 22, standard
// library only, no network.
import { copyFileSync, mkdirSync } from "node:fs";

const out = "/output";
mkdirSync(out, { recursive: true });
copyFileSync(new URL("./meme.png", import.meta.url), `${out}/entry.png`);
console.log("meme written to /output/entry.png");
console.log("post: https://x.com/steve1998pg/status/2124546144852463779");
