/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow specified global variables
 * @see https://eslint.org/docs/rules/no-restricted-globals
 *
 * @minItems 1
 */
export type NoRestrictedGlobals =
  | 'off'
  | [
      'off' | 'error' | 'warn',
      ...(
        | string
        | {
            name: string;
            message?: string;
          }
      )[]
    ];
