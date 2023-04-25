/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require `return` statements to either always or never specify values
 * @see https://eslint.org/docs/rules/consistent-return
 *
 * @minItems 1
 */
export type ConsistentReturn =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        treatUndefinedAsUnspecified?: boolean;
      }
    ];
