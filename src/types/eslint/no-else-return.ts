/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow `else` blocks after `return` statements in `if` statements
 * @see https://eslint.org/docs/rules/no-else-return
 *
 * @minItems 1
 */
export type NoElseReturn =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowElseIf?: boolean;
      }
    ];
