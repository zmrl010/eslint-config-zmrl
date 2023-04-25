/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow the use of `eval()`
 * @see https://eslint.org/docs/rules/no-eval
 *
 * @minItems 1
 */
export type NoEval =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowIndirect?: boolean;
      }
    ];
