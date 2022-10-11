/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import npmAddScript from 'npm-add-script'
import child_process from 'child_process'
import { recursiveCopy } from 'helpers'

const exec = util.promisify(child_process.exec)

const dependencies = [
  'eslint',
  'eslint-config-airbnb-base',
  'eslint-config-airbnb-typescript',
  'eslint-config-prettier',
  'eslint-plugin-astro',
  'eslint-plugin-import',
  'eslint-plugin-jsonc',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-simple-import-sort',
  'eslint-plugin-tailwindcss',
  'eslint-plugin-unicorn',
  'eslint-plugin-unused-imports',
  'eslint-plugin-yml',
]

export const eslint = async () => {
  console.info(chalk.magenta(`Configuring eslint... \n`))
  try {
    console.info(chalk.magenta('- Installing eslint and plugins'))
    await exec(`yarn add -D ${dependencies.join(' ')}`)

    console.info(chalk.magenta(`- Copying .eslintrc.cjs to ./ \n`))
    await recursiveCopy('@configs/eslint/next/.eslintrc.cjs', '.eslintrc.cjs')

    console.info(chalk.magenta(`- Appending "prepare" script to package.json' '\n`))
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    npmAddScript({ key: 'format', value: 'eslint --write "src/**/*.ts"', force: true })

    console.info(chalk.green(`Successfully installed and configured eslint! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default eslint
