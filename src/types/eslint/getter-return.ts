/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce `return` statements in getters
 * @see https://eslint.org/docs/rules/getter-return
 *
 * @minItems 1
 */
export type GetterReturn =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
      }
    ];
