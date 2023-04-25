/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow `void` operators
 * @see https://eslint.org/docs/rules/no-void
 *
 * @minItems 1
 */
export type NoVoid =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAsStatement?: boolean;
      }
    ];
