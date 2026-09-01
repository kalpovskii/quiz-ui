import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const REGISTRY_OUTPUT_DIR = join(process.cwd(), "public/r");

export async function getAllPackageNames(): Promise<string[]> {
  const files = await readdir(REGISTRY_OUTPUT_DIR);

  return files
    .filter((file) => file.endsWith(".json") && file !== "registry.json")
    .map((file) => file.replace(".json", ""));
}

export async function getPackage(name: string) {
  const packagePath = join(REGISTRY_OUTPUT_DIR, `${name}.json`);
  const content = await readFile(packagePath, "utf-8");

  return JSON.parse(content);
}
