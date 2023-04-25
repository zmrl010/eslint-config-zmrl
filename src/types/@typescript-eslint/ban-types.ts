/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY.
 */
/**
 * Disallow certain types
 * @see https://typescript-eslint.io/rules/ban-types
 *
 * @minItems 1
 */
export type BanTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        types?: {
          [k: string]:
            | (
                | null
                | boolean
                | string
                | {
                    message?: string;
                    fixWith?: string;
                    suggest?: string[];
                  }
              )
            | undefined;
        };
        extendDefaults?: boolean;
      }
    ];
