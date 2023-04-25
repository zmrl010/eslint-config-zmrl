/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow specified syntax
 * @see https://eslint.org/docs/rules/no-restricted-syntax
 *
 * @minItems 1
 */
export type NoRestrictedSyntax =
  | 'off'
  | [
      'off' | 'error' | 'warn',
      ...(
        | string
        | {
            selector: string;
            message?: string;
          }
      )[]
    ];
