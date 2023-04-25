/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow duplicate module imports
 * @see https://eslint.org/docs/rules/no-duplicate-imports
 *
 * @minItems 1
 */
export type NoDuplicateImports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        includeExports?: boolean;
      }
    ];
