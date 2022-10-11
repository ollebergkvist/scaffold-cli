/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import npmAddScript from 'npm-add-script'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)

export const barrelsby = async () => {
  console.info(chalk.magenta(`Configuring barrelsby... \n`))
  try {
    console.info(chalk.magenta(`- Installing barrelsby`))
    await exec('yarn add -D barrelsby')

    console.info(
      chalk.magenta(`- Appending "generate-barrels" and "predev" script to package.json' '\n`),
    )
    npmAddScript({
      key: 'generate-barrels',
      value: 'barrelsby --delete --directory src --location all --noHeader',
      force: true,
    })
    npmAddScript({ key: 'predev', value: 'yarn generate-barrels', force: true })

    console.info(chalk.green(`Successfully installed and configured barrelsby! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default barrelsby
