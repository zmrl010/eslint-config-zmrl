/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require constructor names to begin with a capital letter
 * @see https://eslint.org/docs/rules/new-cap
 *
 * @minItems 1
 */
export type NewCap =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        newIsCap?: boolean;
        capIsNew?: boolean;
        newIsCapExceptions?: string[];
        newIsCapExceptionPattern?: string;
        capIsNewExceptions?: string[];
        capIsNewExceptionPattern?: string;
        properties?: boolean;
      }
    ];
