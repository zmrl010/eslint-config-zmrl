/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce the maximum number of dependencies a module can have.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/max-dependencies.md
 *
 * @minItems 1
 */
export type MaxDependencies =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max?: number;
        ignoreTypeImports?: boolean;
      }
    ];
