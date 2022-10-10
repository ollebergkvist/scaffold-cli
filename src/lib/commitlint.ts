/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy.js'

const exec = util.promisify(child_process.exec)

export const commitLint = async () => {
  console.info(chalk.magenta(`Configuring commitlint... \n`))
  try {
    console.info(chalk.magenta(`- Installing commitlint`))
    await exec('yarn add -D @commitlint/{config-conventional,cli}')

    console.info(chalk.magenta(`- Copying commitlint.config.cjs to ./`))
    await recursiveCopy('../configs/shared/commitlint.config.cjs', 'commitlint.config.cjs')

    console.info(chalk.magenta(`- Add commit-msg husky hook \n`))
    await exec('npx husky add .husky/commit-msg  "yarn commitlint --edit "')

    console.info(chalk.green(`Successfully installed and configured commitlint! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default commitLint
