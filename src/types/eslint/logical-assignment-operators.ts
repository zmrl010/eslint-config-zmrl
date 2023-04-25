/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Require or disallow logical assignment operator shorthand
 * @see https://eslint.org/docs/rules/logical-assignment-operators
 *
 * @minItems 1
 */
export type LogicalAssignmentOperators =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | []
        | ['always']
        | [
            'always',
            {
              enforceForIfStatements?: boolean;
            }
          ]
        | ['never']
      ) &
        unknown[]
    ];
