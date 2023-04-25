<h1 align="center">
  eslint-config-zmrl
</h1>

An exhaustive base config to be extended by custom eslint configurations.
Suitable for most TypeScript or JavaScript projects and can be easily
extended for deeper customization.

Exhaustive in this context means that every
rule defined in ESLint core and installed plugins must be configured, even just
turned off. This allows the configuration to remain constant, even when defaults
change.

This library is a continuation of my [previous config](https://github.com/zmrl010/eslint-config)
with less bloat and with specific needs (ie: `React`, `Jest`, etc.) moved into
separate packages.

## Install

Install with your favorite package manager.

```shell
pnpm add -D eslint-config-zmrl
```

## Usage

### Flat Config

Using the new [ESLint flat configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new),
you can import and include this package in your `eslint.config.js`

```ts
import config from 'eslint-config-zmrl'

export default [...config]
```
