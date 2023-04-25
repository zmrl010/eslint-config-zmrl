/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require expressions of type void to appear in statement position
 * @see https://typescript-eslint.io/rules/no-confusing-void-expression
 *
 * @minItems 1
 */
export type NoConfusingVoidExpression =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreArrowShorthand?: boolean;
        ignoreVoidOperator?: boolean;
      }
    ];
