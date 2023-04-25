/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow trailing whitespace at the end of lines
 * @see https://eslint.org/docs/rules/no-trailing-spaces
 *
 * @minItems 1
 */
export type NoTrailingSpaces =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      }
    ];
