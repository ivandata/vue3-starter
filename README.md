# Vue 3 + TypeScript + Vite

![Coverage badge](./coverage/badge-branches.svg)
![Coverage badge](./coverage/badge-functions.svg)
![Coverage badge](./coverage/badge-lines.svg)
![Coverage badge](./coverage/badge-statements.svg)

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.
The template including basic workflows for GitHub Actions with dependabot.
Information about used tools can be found in the [Used tools](#Used tools) section.

## Prerequisites

The following dependencies required:

- [pnpm](https://pnpm.io/)
- [node](https://nodejs.org/en/download/)
- [volta](https://volta.sh/) (or at least [nvm](https://github.com/nvm-sh/nvm))

## Tests

For unit test used Just setup with [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro/) and [Vitest](https://vitest.dev/) test runner. There is no cypress configuration yet.
Command to run unit tests:

```sh
$ pnpm test:unit
```

## Theme and tokens configuration

This template use [Style Dictionary](https://amzn.github.io/style-dictionary/) for design tokens generation. All configurations are placed in the `build.ts` script located in the `src/theme` directory. After generation tokens all scss variables can be imported from `src/theme/__generated__/_variables.scss`
To run tokens generation:

```sh
$ pnpm tokens
```

## Used tools

![prettier version](https://img.shields.io/badge/prettier-2.8.0-brightgreen)
![eslint version](https://img.shields.io/badge/eslint-8.28.0-brightgreen)
![husky version](https://img.shields.io/badge/husky-8.0.2-brightgreen)
![stylelint version](https://img.shields.io/badge/stylelint-14.15.0-brightgreen)
![style-dictionary version](https://img.shields.io/badge/style--dictionary-3.7.1-brightgreen)
![typescript version](https://img.shields.io/badge/typescript-4.6.4-brightgreen)
![vitest version](https://img.shields.io/badge/vitest-0.25.6-brightgreen)
![jest version](https://img.shields.io/badge/jest-29.3.1-brightgreen)

- [Style Dictionary](https://amzn.github.io/style-dictionary/) The build system from Amazon, which help to define styles once, in a way for any platform or language to consume like, IOS, Android, Web, e.t.c.
- [volta](https://volta.sh/) JavaScript tool manager;
- [Eslint](https://eslint.org/), [Stylelint](https://stylelint.io/), [prettier](https://github.com/prettier/prettier) and [husky](https://github.com/typicode/husky)

## Run the template locally

If you using nvm instead volta run:

```sh
$ nvm use
```

To lunch the template locally:

```sh
$ pnpm install
$ pnpm dev
```

The browser should open automatically.
I it not happens, open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available scripts

For dependencies badges updating:

```sh
$ pnpm badges:deps
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
