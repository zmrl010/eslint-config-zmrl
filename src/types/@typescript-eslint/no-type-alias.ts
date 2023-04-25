/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow type aliases
 * @see https://typescript-eslint.io/rules/no-type-alias
 *
 * @minItems 1
 */
export type NoTypeAlias =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow direct one-to-one type aliases.
         */
        allowAliases?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        /**
         * Whether to allow type aliases for callbacks.
         */
        allowCallbacks?: 'always' | 'never';
        /**
         * Whether to allow type aliases for conditional types.
         */
        allowConditionalTypes?: 'always' | 'never';
        /**
         * Whether to allow type aliases with constructors.
         */
        allowConstructors?: 'always' | 'never';
        /**
         * Whether to allow type aliases with object literal types.
         */
        allowLiterals?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        /**
         * Whether to allow type aliases with mapped types.
         */
        allowMappedTypes?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        /**
         * Whether to allow type aliases with tuple types.
         */
        allowTupleTypes?:
          | 'always'
          | 'never'
          | 'in-unions'
          | 'in-intersections'
          | 'in-unions-and-intersections';
        /**
         * Whether to allow type aliases with generic types.
         */
        allowGenerics?: 'always' | 'never';
      }
    ];
