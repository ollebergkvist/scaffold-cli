#!/usr/bin/env node

// libs
import { Command } from 'commander'
import chalk from 'chalk'
import figlet from 'figlet'

// initializers
import {
  astro,
  commitLint,
  cypress,
  eslint,
  husky,
  jest,
  lintStaged,
  next,
  prettier,
  rimraf,
  tailwindcss,
  typescript,
} from 'lib'

// helpers
import { Options } from 'helpers'

const program = new Command()

// eslint-disable-next-line no-console
console.info(chalk.green(figlet.textSync('scaffold-cli', { horizontalLayout: 'full' })))

program
  .version('0.0.1')
  .description('A CLI that scaffolds common tools and configs')
  .usage('[options] <file>')
  .option('-a, --astro', Options.astro, astro)
  .option('-n, --next', Options.next, next)
  .option('-cl, --commitlint', Options.commitLint, commitLint)
  .option('-cy, --cypress', Options.cypress, cypress)
  .option('-es, --eslint', Options.eslint, eslint)
  .option('-hu, --husky', Options.husky, husky)
  .option('-je, --jest', Options.jest, jest)
  .option('-ls, --lint-staged', Options.lintStaged, lintStaged)
  .option('-pr, --prettier', Options.prettier, prettier)
  .option('-rr, --rimraf', Options.rimraf, rimraf)
  .option('-tw, --tailwindcss', Options.tailwindcss, tailwindcss)
  .option('-ts, --typescript', Options.typescript, typescript)
  .parse(process.argv)
