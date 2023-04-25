/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow fallthrough of `case` statements
 * @see https://eslint.org/docs/rules/no-fallthrough
 *
 * @minItems 1
 */
export type NoFallthrough =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commentPattern?: string;
        allowEmptyCase?: boolean;
      }
    ];
