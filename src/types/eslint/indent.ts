/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Enforce consistent indentation
 * @see https://eslint.org/docs/rules/indent
 *
 * @minItems 1
 */
export type Indent =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'tab' | number]
  | [
      'off' | 'error' | 'warn',
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | (number | ('first' | 'off'))
          | {
              var?: number | ('first' | 'off');
              let?: number | ('first' | 'off');
              const?: number | ('first' | 'off');
            };
        outerIIFEBody?: number | 'off';
        MemberExpression?: number | 'off';
        FunctionDeclaration?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        FunctionExpression?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        StaticBlock?: {
          body?: number;
        };
        CallExpression?: {
          arguments?: number | ('first' | 'off');
        };
        ArrayExpression?: number | ('first' | 'off');
        ObjectExpression?: number | ('first' | 'off');
        ImportDeclaration?: number | ('first' | 'off');
        flatTernaryExpressions?: boolean;
        offsetTernaryExpressions?: boolean;
        ignoredNodes?: string[];
        ignoreComments?: boolean;
      }
    ];
