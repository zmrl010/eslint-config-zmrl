/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow ternary operators when simpler alternatives exist
 * @see https://eslint.org/docs/rules/no-unneeded-ternary
 *
 * @minItems 1
 */
export type NoUnneededTernary =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        defaultAssignment?: boolean;
      }
    ];
