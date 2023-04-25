/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
 * @see https://eslint.org/docs/rules/require-atomic-updates
 *
 * @minItems 1
 */
export type RequireAtomicUpdates =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowProperties?: boolean;
      }
    ];
