/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce consistent brace style for blocks
 * @see https://typescript-eslint.io/rules/brace-style
 *
 * @minItems 1
 */
export type BraceStyle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', '1tbs' | 'stroustrup' | 'allman']
  | [
      'off' | 'error' | 'warn',
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      }
    ];
