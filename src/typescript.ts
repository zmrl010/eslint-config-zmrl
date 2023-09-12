import fs from "fs";
import path from "path";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import type { FlatConfigItem, LanguageOptions } from "./flat-eslint-config.js";

/**
 * Resolve first existing path
 */
export function resolveFirstExisting(...paths: string[]): string | undefined {
  const filepath = paths.find((p) => fs.existsSync(p));

  if (!filepath) {
    return;
  }

  return path.resolve(filepath);
}

const projectTsConfig = resolveFirstExisting(
  "tsconfig.json",
  "types/tsconfig.json",
);

export const config: FlatConfigItem = {
  plugins: { "@typescript-eslint": typescriptPlugin },
  rules: typescriptPlugin.configs.recommended.rules,
  files: ["**/*.ts?(x)"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: projectTsConfig,
    },
  } satisfies LanguageOptions,
};
