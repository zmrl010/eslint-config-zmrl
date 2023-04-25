/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow assignments where both sides are exactly the same
 * @see https://eslint.org/docs/rules/no-self-assign
 *
 * @minItems 1
 */
export type NoSelfAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        props?: boolean;
      }
    ];
