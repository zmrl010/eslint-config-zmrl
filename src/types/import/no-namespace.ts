/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Forbid namespace (a.k.a. "wildcard" `*`) imports.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-namespace.md
 *
 * @minItems 1
 */
export type NoNamespace =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignore?: string[];
        [k: string]: unknown | undefined;
      }
    ];
