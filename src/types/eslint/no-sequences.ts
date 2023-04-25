/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow comma operators
 * @see https://eslint.org/docs/rules/no-sequences
 *
 * @minItems 1
 */
export type NoSequences =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInParentheses?: boolean;
      }
    ];
