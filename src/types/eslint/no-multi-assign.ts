/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow use of chained assignment expressions
 * @see https://eslint.org/docs/rules/no-multi-assign
 *
 * @minItems 1
 */
export type NoMultiAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreNonDeclaration?: boolean;
      }
    ];
