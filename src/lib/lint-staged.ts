/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy.js'
import { resolvePath } from '../helpers/path.js'

const exec = util.promisify(child_process.exec)

export const lintStaged = async () => {
  console.info(chalk.magenta(`Configuring lint-staged... \n`))

  try {
    console.info(chalk.magenta(`- Installing lint-staged`))
    await exec('yarn add -D lint-staged')

    console.info(chalk.magenta(`- Copying .lintstagedrc.cjs to ./ \n`))
    await recursiveCopy(resolvePath('shared/.lintstagedrc.cjs'), '.lintstagedrc.cjs')

    console.info(chalk.green(`Successfully installed and configured lint-staged! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default lintStaged
