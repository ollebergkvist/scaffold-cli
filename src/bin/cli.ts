#!/usr/bin/env node

// libs
import { Command } from 'commander'
import chalk from 'chalk'
import figlet from 'figlet'

// initializers
import { astro } from '../lib/astro.js'
import { barrelsby } from '../lib/barrelsby.js'
import { commitLint } from '../lib/commitlint.js'
import { cypress } from '../lib/cypress.js'
import { eslint } from '../lib/eslint.js'
import { husky } from '../lib/husky.js'
import { jest } from '../lib/jest.js'
import { lintStaged } from '../lib/lint-staged.js'
import { next } from '../lib/next.js'
import { prettier } from '../lib/prettier.js'
import { rimraf } from '../lib/rimraf.js'
import { tailwindcss } from '../lib/tailwindcss.js'
import { typescript } from '../lib/typescript.js'

// helpers
import { Options } from '../helpers/options.js'

const program = new Command()

// eslint-disable-next-line no-console
console.info(chalk.green(figlet.textSync('scaffold-cli', { horizontalLayout: 'full' })))

program
  .version('1.0.4')
  .description('A CLI that scaffolds common tools and configs')
  .usage('[options] <file>')
  .option('-a, --astro', Options.astro, astro)
  .option('-n, --next', Options.next, next)
  .option('-bb, --barrelsby', Options.barrelsby, barrelsby)
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
