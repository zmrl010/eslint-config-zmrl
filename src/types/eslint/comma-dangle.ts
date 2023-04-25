/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require or disallow trailing commas
 * @see https://eslint.org/docs/rules/comma-dangle
 *
 * @minItems 1
 */
export type CommaDangle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | Value
        | {
            arrays?: ValueWithIgnore;
            objects?: ValueWithIgnore;
            imports?: ValueWithIgnore;
            exports?: ValueWithIgnore;
            functions?: ValueWithIgnore;
          }
      )
    ];
export type Value = 'always-multiline' | 'always' | 'never' | 'only-multiline';
export type ValueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'ignore'
  | 'never'
  | 'only-multiline';
