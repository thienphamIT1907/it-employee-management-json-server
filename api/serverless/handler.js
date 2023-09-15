import { readFileSync } from "fs";
import path from "path";

export default function handler(request, response) {
  const file = path.join(process.cwd(), "files", "/tmp/db.json");
  const stringified = readFileSync(file, "utf8");

  response.setHeader("Content-Type", "application/json");
  return response.end(stringified);
}
