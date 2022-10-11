/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import npmAddScript from 'npm-add-script'
import child_process from 'child_process'
import { recursiveCopy } from 'helpers'

const exec = util.promisify(child_process.exec)

export const prettier = async () => {
  console.info(chalk.magenta(`Configuring prettier... \n`))

  try {
    console.info(chalk.magenta(`- Installing prettier`))
    await exec('yarn add -D prettier')

    console.info(chalk.magenta(`- Copying .prettierrc.cjs to ./ \n`))
    await recursiveCopy('@configs/shared/.prettierrc.cjs', '.prettierrc.cjs')

    console.info(chalk.magenta(`- Appending "prettier:check" script to package.json' '\n`))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    npmAddScript({ key: 'prettier:check', value: 'yarn prettier --check ."', force: true })

    console.info(chalk.green(`Successfully installed and configured prettier! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default prettier
