/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce linebreaks after opening and before closing array brackets
 * @see https://eslint.org/docs/rules/array-bracket-newline
 *
 * @minItems 1
 */
export type ArrayBracketNewline =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('always' | 'never' | 'consistent')
        | {
            multiline?: boolean;
            minItems?: number | null;
          }
      )
    ];
