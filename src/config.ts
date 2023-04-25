import prettierConfig from "eslint-config-prettier";
import { config as eslintConfig } from "./eslint.js";
import type { FlatConfig } from "./flat-eslint-config.js";
import {
  config as importConfig,
  typescriptConfig as importTSConfig,
} from "./import.js";
import { config as typescriptConfig } from "./typescript.js";

const config: FlatConfig = [
  prettierConfig,
  importConfig,
  eslintConfig,
  typescriptConfig,
  importTSConfig,
];

export default config;
