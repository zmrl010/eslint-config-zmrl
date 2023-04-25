/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require or disallow spacing around the `*` in `yield*` expressions
 * @see https://eslint.org/docs/rules/yield-star-spacing
 *
 * @minItems 1
 */
export type YieldStarSpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          }
      )
    ];
