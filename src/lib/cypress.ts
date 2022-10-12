/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy.js'
import resolvePath from '../helpers/path.js'

const exec = util.promisify(child_process.exec)

export const cypress = async () => {
  console.info(chalk.magenta(`Configuring cypress... \n`))
  try {
    console.info(chalk.magenta(`- Installing cypress`))
    await exec('yarn add -D cypress')

    console.info(chalk.magenta(`- Copying cypress.config.ts to ./ \n`))
    await recursiveCopy(resolvePath('shared/cypress.config.ts'), 'cypress.config.ts'),
      console.info(chalk.green('Successfully installed and configured cypress! \n'))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default cypress
