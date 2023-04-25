/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow invalid regular expression strings in `RegExp` constructors
 * @see https://eslint.org/docs/rules/no-invalid-regexp
 *
 * @minItems 1
 */
export type NoInvalidRegexp =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowConstructorFlags?: string[];
      }
    ];
