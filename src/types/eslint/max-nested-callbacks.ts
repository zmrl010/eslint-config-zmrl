/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce a maximum depth that callbacks can be nested
 * @see https://eslint.org/docs/rules/max-nested-callbacks
 *
 * @minItems 1
 */
export type MaxNestedCallbacks =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      )
    ];
