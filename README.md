# Scaffold-cli

A CLI that scaffolds common tools and configs

## Installation

```
yarn global add @ollebergkvist/scaffolder
npx @ollebergkvist/scaffolder
```

## How to use

```
scaffold-cli <option>
```

## Options

```
  -V, --version       output the version number
  -a, --astro         installs common tools, typescript and eslint astro specific config
  -n, --next          installs common tools, typescript and eslint next specific configs
  -cl, --commitlint   installs commitlint, adds husky commit-msg hook
  -cy, --cypress      installs cypress, adds .cypress.cjs
  -es, --eslint       installs eslint, adds .eslintrc.cjs
  -hu, --husky        initializes husky
  -je, --jest         installs jest
  -ls, --lint-staged  installs lint-staged
  -pr, --prettier     installs prettier, adds .prettierrc.cjs
  -rr, --rimraf       installs rimraf
  -tw, --tailwindcss  install tailwindcss, adds default config
  -ts, --typescript   installs typescript, adds tsconfig.json
  -h, --help          display help for command
  ```
