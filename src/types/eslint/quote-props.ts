/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require quotes around object literal property names
 * @see https://eslint.org/docs/rules/quote-props
 */
export type QuoteProps =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed'
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed'
        ]
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
          {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
          }
        ]
    );
