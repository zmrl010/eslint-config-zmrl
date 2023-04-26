import prettierConfig from "eslint-config-prettier";
import { config as eslintConfig } from "./eslint.js";
import type { FlatConfig } from "./flat-eslint-config.js";
import { configs as importConfigs } from "./import.js";
import { config as typescriptConfig } from "./typescript.js";

const config = [
  eslintConfig,
  ...importConfigs,
  typescriptConfig,
  prettierConfig,
] satisfies FlatConfig;

export default config;