/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require `const` declarations for variables that are never reassigned after declared
 * @see https://eslint.org/docs/rules/prefer-const
 *
 * @minItems 1
 */
export type PreferConst =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        destructuring?: 'any' | 'all';
        ignoreReadBeforeAssign?: boolean;
      }
    ];
