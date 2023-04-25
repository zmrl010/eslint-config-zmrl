/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow unnecessary computed property keys in objects and classes
 * @see https://eslint.org/docs/rules/no-useless-computed-key
 *
 * @minItems 1
 */
export type NoUselessComputedKey =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForClassMembers?: boolean;
      }
    ];
