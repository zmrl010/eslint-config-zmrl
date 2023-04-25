/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Forbid importing packages through relative paths.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-relative-packages.md
 *
 * @minItems 1
 */
export type NoRelativePackages =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        /**
         * @minItems 1
         */
        ignore?: [string, ...string[]];
      }
    ];
