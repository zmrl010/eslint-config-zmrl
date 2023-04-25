/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow certain properties on certain objects
 * @see https://eslint.org/docs/rules/no-restricted-properties
 *
 * @minItems 1
 */
export type NoRestrictedProperties =
  | 'off'
  | [
      'off' | 'error' | 'warn',
      ...(
        | {
            object: string;
            property?: string;
            message?: string;
          }
        | {
            object?: string;
            property: string;
            message?: string;
          }
      )[]
    ];
