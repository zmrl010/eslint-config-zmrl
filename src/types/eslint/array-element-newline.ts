/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce line breaks after each array element
 * @see https://eslint.org/docs/rules/array-element-newline
 *
 * @minItems 1
 */
export type ArrayElementNewline =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | BasicConfig
        | {
            ArrayExpression?: BasicConfig;
            ArrayPattern?: BasicConfig;
          }
      )
    ];
export type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };
