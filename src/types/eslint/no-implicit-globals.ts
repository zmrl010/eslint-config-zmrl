/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow declarations in the global scope
 * @see https://eslint.org/docs/rules/no-implicit-globals
 *
 * @minItems 1
 */
export type NoImplicitGlobals =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        lexicalBindings?: boolean;
      }
    ];
