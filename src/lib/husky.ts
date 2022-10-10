/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)

export const husky = async () => {
  console.info(chalk.magenta('Configuring husky...'))
  try {
    console.info(chalk.magenta('- Initializing husky'))
    await exec('git init && npx husky-init && yarn')

    console.info(chalk.green('Successfully installed and configured husky!'))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default husky
