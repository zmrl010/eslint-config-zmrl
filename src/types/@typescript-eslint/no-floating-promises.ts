/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require Promise-like statements to be handled appropriately
 * @see https://typescript-eslint.io/rules/no-floating-promises
 *
 * @minItems 1
 */
export type NoFloatingPromises =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore `void` expressions.
         */
        ignoreVoid?: boolean;
        /**
         * Whether to ignore async IIFEs (Immediately Invocated Function Expressions).
         */
        ignoreIIFE?: boolean;
      }
    ];
