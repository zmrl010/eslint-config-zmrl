/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow `void` type outside of generic or return types
 * @see https://typescript-eslint.io/rules/no-invalid-void-type
 *
 * @minItems 1
 */
export type NoInvalidVoidType =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInGenericTypeArguments?: boolean | string[];
        allowAsThisParameter?: boolean;
      }
    ];
