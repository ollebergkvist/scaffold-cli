/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy'

const exec = util.promisify(child_process.exec)

export const jest = async () => {
  console.info(chalk.magenta(`Configuring jest... \n`))

  try {
    console.info(chalk.magenta(`- Installing jest`))
    await exec('yarn add -D jest')

    console.info(chalk.magenta(`- Copying jest.config.ts to ./ \n`))
    await recursiveCopy('configs/shared/jest.config.ts', 'jest.config.ts')

    console.info(chalk.green(`Successfully installed and configured jest! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default jest
