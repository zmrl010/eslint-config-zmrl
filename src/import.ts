import importPlugin from "eslint-plugin-import";
import type { FlatConfig, FlatConfigItem } from "./flat-eslint-config.js";
import type { Import } from "./types/import/index.js";

const baseConfig = {
  plugins: { import: importPlugin },
  settings: {
    "import/ignore": ["node_modules", ".json$", ".(scss|less|css)$"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
} satisfies FlatConfigItem;

export const config = {
  ...baseConfig,
  rules: {
    "import/default": ["error"],
    "import/named": ["error"],
    "import/namespace": ["error"],
    "import/dynamic-import-chunkname": ["off"],
    "import/export": ["error"],
    "import/exports-last": "off",
    "import/extensions": "off",
    "import/first": ["error"],
    "import/group-exports": "off",
    "import/max-dependencies": "off",
    "import/newline-after-import": "off",
    "import/no-absolute-path": ["error"],
    "import/no-amd": ["error"],
    "import/no-anonymous-default-export": "off",
    "import/no-commonjs": "off",
    "import/no-cycle": "off", // this rule is quite slow...
    "import/no-default-export": "off",
    "import/no-deprecated": ["warn"], // this is an in progress rule
    "import/no-duplicates": ["error"],
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": ["error"],
    "import/no-import-module-exports": ["error"],
    "import/no-internal-modules": "off",
    "import/no-mutable-exports": ["error"],
    "import/no-named-as-default": ["error"],
    "import/no-named-as-default-member": ["error"],
    "import/no-named-default": ["error"],
    "import/no-named-export": "off", // Prohibit named exports. Mostly an inverse of no-default-export
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-relative-packages": ["warn"],
    "import/no-relative-parent-imports": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": ["error"],
    "import/no-unassigned-import": "off",
    "import/no-unresolved": ["error", { ignore: ["^eslint-config-zmrl$"] }],
    "import/no-unused-modules": "off",
    "import/no-useless-path-segments": "off",
    "import/no-webpack-loader-syntax": ["error"],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          ["external", "internal"],
          "parent",
          ["sibling", "index"],
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "import/unambiguous": "off", // not sure I understand this rule well enough right now...
    "import/consistent-type-specifier-style": ["error"],
    "import/no-empty-named-blocks": ["error"],
  } satisfies Import,
} satisfies FlatConfigItem;

export const typescriptConfig = {
  ...baseConfig,
  files: ["**/*.ts?(x)"],
  rules: {
    "import/default": "off",
    "import/named": "off",
    "import/namespace": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
  } satisfies Partial<Import>,
} satisfies FlatConfigItem;

export const configs = [config, typescriptConfig] satisfies FlatConfig;
