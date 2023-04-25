/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow the use of `console`
 * @see https://eslint.org/docs/rules/no-console
 *
 * @minItems 1
 */
export type NoConsole =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
      }
    ];
