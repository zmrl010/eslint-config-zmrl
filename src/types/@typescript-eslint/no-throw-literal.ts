/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow throwing literals as exceptions
 * @see https://typescript-eslint.io/rules/no-throw-literal
 *
 * @minItems 1
 */
export type NoThrowLiteral =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowThrowingAny?: boolean;
        allowThrowingUnknown?: boolean;
      }
    ];
