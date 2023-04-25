/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow constant expressions in conditions
 * @see https://eslint.org/docs/rules/no-constant-condition
 *
 * @minItems 1
 */
export type NoConstantCondition =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkLoops?: boolean;
      }
    ];
