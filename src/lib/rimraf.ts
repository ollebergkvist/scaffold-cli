/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)

export const rimraf = async () => {
  console.info(chalk.magenta(`Configuring rimraf... \n`))

  try {
    console.info(chalk.magenta(`- Installing rimraf \n`))

    await exec('yarn add -D rimraf')

    console.info(chalk.green(`Successfully installed and configured rimraf! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default rimraf
