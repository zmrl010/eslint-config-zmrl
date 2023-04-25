/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow arrow functions where they could be confused with comparisons
 * @see https://eslint.org/docs/rules/no-confusing-arrow
 *
 * @minItems 1
 */
export type NoConfusingArrow =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowParens?: boolean;
        onlyOneSimpleParam?: boolean;
      }
    ];
