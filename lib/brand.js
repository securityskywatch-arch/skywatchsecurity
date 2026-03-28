import fs from "fs";
import path from "path";
const ALLOWED = /\.(png|jpe?g|webp|svg|gif)$/i;
function getBrandLogoSrc() {
  const dir = path.join(process.cwd(), "public", "brand");
  try {
    const names = fs.readdirSync(dir);
    const file = names.find(
      (n) => !n.startsWith(".") && ALLOWED.test(n) && n !== ".gitkeep"
    );
    if (file) return `/brand/${file}`;
  } catch {
  }
  return "/brand/logo.webp";
}
export {
  getBrandLogoSrc
};
