import prettierConfig from "eslint-config-prettier";
import { config as eslintConfig } from "./eslint.js";
import { configs as importConfigs } from "./import.js";
import { config as typescriptConfig } from "./typescript.js";
import type { FlatConfig } from "./flat-eslint-config.js";

const config: FlatConfig = [
  eslintConfig,
  ...importConfigs,
  typescriptConfig,
  prettierConfig,
];

export default config;
