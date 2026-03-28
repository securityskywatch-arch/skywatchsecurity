/**
 * Frees port 3000, deletes .next (and webpack cache), then starts dev on :3000.
 */
import { existsSync, rmSync } from "node:fs";
import { execSync, spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const killBin =
  process.platform === "win32"
    ? path.join(root, "node_modules", ".bin", "kill-port.cmd")
    : path.join(root, "node_modules", ".bin", "kill-port");
if (existsSync(killBin)) {
  try {
    execSync(`"${killBin}" 3000`, { cwd: root, stdio: "inherit", shell: true });
  } catch {
    /* port already free */
  }
}
const nextDir = path.join(root, ".next");
const webpackCache = path.join(root, "node_modules", ".cache");

for (const dir of [nextDir, webpackCache]) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log("Removed", path.relative(root, dir));
  }
}

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, "dev", "--turbo", "-p", "3000"], {
  cwd: root,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 0));
