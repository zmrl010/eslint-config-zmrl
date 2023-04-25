/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require or disallow semicolons instead of ASI
 * @see https://eslint.org/docs/rules/semi
 */
export type Semi =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'never']
      | [
          'off' | 'error' | 'warn',
          'never',
          {
            beforeStatementContinuationChars?: 'always' | 'any' | 'never';
          }
        ]
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'always']
      | [
          'off' | 'error' | 'warn',
          'always',
          {
            omitLastInOneLineBlock?: boolean;
          }
        ]
    );
