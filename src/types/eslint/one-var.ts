/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce variables to be declared either together or separately in functions
 * @see https://eslint.org/docs/rules/one-var
 *
 * @minItems 1
 */
export type OneVar =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never' | 'consecutive')
        | {
            separateRequires?: boolean;
            var?: 'always' | 'never' | 'consecutive';
            let?: 'always' | 'never' | 'consecutive';
            const?: 'always' | 'never' | 'consecutive';
          }
        | {
            initialized?: 'always' | 'never' | 'consecutive';
            uninitialized?: 'always' | 'never' | 'consecutive';
          }
      )
    ];
