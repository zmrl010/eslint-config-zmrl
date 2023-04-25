/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow use of `this` in contexts where the value of `this` is `undefined`
 * @see https://eslint.org/docs/rules/no-invalid-this
 *
 * @minItems 1
 */
export type NoInvalidThis =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        capIsConstructor?: boolean;
      }
    ];
