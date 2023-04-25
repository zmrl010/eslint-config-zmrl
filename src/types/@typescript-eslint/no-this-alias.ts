/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow aliasing `this`
 * @see https://typescript-eslint.io/rules/no-this-alias
 *
 * @minItems 1
 */
export type NoThisAlias =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore destructurings, such as `const { props, state } = this`.
         */
        allowDestructuring?: boolean;
        /**
         * Names to ignore, such as ["self"] for `const self = this;`.
         */
        allowedNames?: string[];
      }
    ];
