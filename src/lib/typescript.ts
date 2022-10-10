/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)

export const typescript = async () => {
  console.info(chalk.magenta('Configuring typescript...'))
  try {
    console.info(chalk.magenta('Initializing typescript'))
    await exec('yarn add -D typescript')

    console.info(chalk.green('Successfully installed and configured typescript!'))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default typescript
