/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow empty block statements
 * @see https://eslint.org/docs/rules/no-empty
 *
 * @minItems 1
 */
export type NoEmpty =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyCatch?: boolean;
      }
    ];
