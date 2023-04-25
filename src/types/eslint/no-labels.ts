/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow labeled statements
 * @see https://eslint.org/docs/rules/no-labels
 *
 * @minItems 1
 */
export type NoLabels =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      }
    ];
