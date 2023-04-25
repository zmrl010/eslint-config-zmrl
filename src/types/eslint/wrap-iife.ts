/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require parentheses around immediate `function` invocations
 * @see https://eslint.org/docs/rules/wrap-iife
 *
 * @minItems 1
 */
export type WrapIife =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'outside' | 'inside' | 'any']
  | [
      'off' | 'error' | 'warn',
      'outside' | 'inside' | 'any',
      {
        functionPrototypeMethods?: boolean;
      }
    ];
