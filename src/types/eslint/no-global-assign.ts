/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow assignments to native objects or read-only global variables
 * @see https://eslint.org/docs/rules/no-global-assign
 *
 * @minItems 1
 */
export type NoGlobalAssign =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];
