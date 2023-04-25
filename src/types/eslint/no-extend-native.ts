/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow extending native types
 * @see https://eslint.org/docs/rules/no-extend-native
 *
 * @minItems 1
 */
export type NoExtendNative =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];
