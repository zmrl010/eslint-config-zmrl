/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce consistent usage of type exports
 * @see https://typescript-eslint.io/rules/consistent-type-exports
 *
 * @minItems 1
 */
export type ConsistentTypeExports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier?: boolean;
      }
    ];
