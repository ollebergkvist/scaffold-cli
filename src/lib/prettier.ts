/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy'

const exec = util.promisify(child_process.exec)

export const prettier = async () => {
  console.info(chalk.magenta(`Configuring prettier... \n`))

  try {
    console.info(chalk.magenta(`- Installing prettier`))
    await exec('yarn add -D prettier')

    console.info(chalk.magenta(`- Copying .prettierrc.cjs to ./ \n`))
    await recursiveCopy('configs/shared/.prettierrc.cjs', '.prettierrc.cjs')

    console.info(chalk.green(`Successfully installed and configured prettier! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default prettier
