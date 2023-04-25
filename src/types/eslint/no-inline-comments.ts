/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow inline comments after code
 * @see https://eslint.org/docs/rules/no-inline-comments
 *
 * @minItems 1
 */
export type NoInlineComments =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePattern?: string;
      }
    ];
