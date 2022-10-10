/* eslint-disable no-console */

// libs
import chalk from 'chalk'
import util from 'util'
import child_process from 'child_process'

const exec = util.promisify(child_process.exec)

const dependencies = [
  '@tailwindcss/aspect-ratio',
  '@tailwindcss/typography',
  'daisyui',
  'tailwindcss',
]

export const tailwindcss = async () => {
  console.info(chalk.magenta(`Configuring tailwindcss... \n`))

  try {
    console.info(chalk.magenta(`- Installing tailwindcss \n`))
    await exec(`yarn add -D ${dependencies.join(' ')} && npx tailwindcss init`)

    console.info(chalk.green(`Successfully installed and configured tailwindcss! \n`))
  } catch (error) {
    console.info(chalk.red(error))
  }
}

export default tailwindcss
