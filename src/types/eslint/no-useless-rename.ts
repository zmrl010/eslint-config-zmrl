/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow renaming import, export, and destructured assignments to the same name
 * @see https://eslint.org/docs/rules/no-useless-rename
 *
 * @minItems 1
 */
export type NoUselessRename =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      }
    ];
