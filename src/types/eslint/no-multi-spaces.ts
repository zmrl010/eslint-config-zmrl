/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow multiple spaces
 * @see https://eslint.org/docs/rules/no-multi-spaces
 *
 * @minItems 1
 */
export type NoMultiSpaces =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^([A-Z][a-z]*)+$".
           */
          [k: string]: boolean;
        };
        ignoreEOLComments?: boolean;
      }
    ];
