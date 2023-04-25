/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require using Error objects as Promise rejection reasons
 * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
 *
 * @minItems 1
 */
export type PreferPromiseRejectErrors =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowEmptyReject?: boolean;
      }
    ];
