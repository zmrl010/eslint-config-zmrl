/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow unnecessary boolean casts
 * @see https://eslint.org/docs/rules/no-extra-boolean-cast
 *
 * @minItems 1
 */
export type NoExtraBooleanCast =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForLogicalOperands?: boolean;
      }
    ];
