/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Forbid import statements with CommonJS module.exports.
 *
 * @minItems 1
 */
export type NoImportModuleExports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: unknown[];
      }
    ];
