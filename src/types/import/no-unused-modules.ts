/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Forbid modules without exports, or exports without matching import in another module.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unused-modules.md
 *
 * @minItems 1
 */
export type NoUnusedModules =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            [k: string]: unknown | undefined;
          }
        | {
            [k: string]: unknown | undefined;
          }
        | {
            unusedExports: true;
            [k: string]: unknown | undefined;
          }
        | {
            missingExports: true;
            [k: string]: unknown | undefined;
          }
      )
    ];
