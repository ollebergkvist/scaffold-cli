/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import npmAddScript from 'npm-add-script'
import child_process from 'child_process'
import { recursiveCopy } from 'helpers'

const exec = util.promisify(child_process.exec)

const dependencies = [
  '@commitlint/{config-conventional,cli}',
  '@tailwindcss/aspect-ratio',
  '@tailwindcss/typography',
  '@types/react',
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'barrelsby',
  'cypress',
  'daisyui',
  'jest',
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
  'lint-staged',
  'prettier',
  'prettier-plugin-astro',
  'rimraf',
  'tailwindcss',
  'typescript',
]

export const astro = async () => {
  console.info(chalk.magenta('Configuring common tools... \n'))

  try {
    console.info(chalk.magenta('- Installing tools'))
    await exec(
      `yarn add -D ${dependencies.join(' ')}`,
      // && npx init husky && yarn
    )

    console.info(chalk.magenta('- Copying shared configs'))
    await recursiveCopy('@configs/shared', '.')

    console.info(chalk.magenta('- Copying astro typescript config'))
    await recursiveCopy('@configs/typescript/astro', '.')

    console.info(chalk.magenta('- Copying astro eslint main config'))
    await recursiveCopy('@configs/eslint/astro', '.')

    console.info(chalk.magenta('- Copying astro eslint children configs \n'))
    await recursiveCopy('@configs/eslint/plugins', './configs')

    console.info(chalk.magenta(`- Appending scripts to package.json' '\n`))
    npmAddScript({
      key: 'generate-barrels',
      value: 'barrelsby --delete --directory src --location all --noHeader',
      force: true,
    })
    npmAddScript({ key: 'predev', value: 'yarn generate-barrels', force: true })

    console.info(chalk.green('Successfully installed and configured default tools! \n'))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default astro
