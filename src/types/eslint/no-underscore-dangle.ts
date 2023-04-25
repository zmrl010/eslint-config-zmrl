/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow dangling underscores in identifiers
 * @see https://eslint.org/docs/rules/no-underscore-dangle
 *
 * @minItems 1
 */
export type NoUnderscoreDangle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
        allowFunctionParams?: boolean;
        enforceInClassFields?: boolean;
        allowInArrayDestructuring?: boolean;
        allowInObjectDestructuring?: boolean;
      }
    ];
