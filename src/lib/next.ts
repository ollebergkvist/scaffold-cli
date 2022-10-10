/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'
import { recursiveCopy } from '../helpers/copy.js'

const exec = util.promisify(child_process.exec)

const dependencies = [
  '@commitlint/{config-conventional,cli}',
  '@tailwindcss/aspect-ratio',
  '@tailwindcss/typography',
  '@types/react',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'cypress',
  'daisyui',
  'jest',
  'eslint',
  'eslint-config-airbnb-base',
  'eslint-config-airbnb-typescript',
  'eslint-config-prettier',
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
  'lint-staged',
  'prettier',
  'rimraf',
  'tailwindcss',
  'typescript',
]

export const next = async () => {
  console.info(chalk.magenta('Configuring common tools... \n'))

  try {
    console.info(chalk.magenta('- Installing tools'))
    await exec(`yarn add -D ${dependencies.join(' ')} && npx init husky`)

    console.info(chalk.magenta('- Copying shared configs'))
    await recursiveCopy('../configs/shared', '.')

    console.info(chalk.magenta('- Copying next typescript config'))
    await recursiveCopy('../configs/typescript/next', '.')

    console.info(chalk.magenta('- Copying next eslint main config'))
    await recursiveCopy('../configs/eslint/next', '.')

    console.info(chalk.magenta('- Copying next eslint children configs \n'))
    await recursiveCopy('../configs/eslint/plugins', '.')

    console.info(chalk.green('Successfully installed and configured default tools! \n'))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default next
