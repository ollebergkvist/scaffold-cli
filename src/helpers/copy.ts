// libs
import chalk from 'chalk'
import copy from 'recursive-copy'

const options = {
  overwrite: true,
  dot: true,
}

export const recursiveCopy = async (src: string, dest: string) => {
  try {
    const results = await copy(src, dest, options)
    // eslint-disable-next-line no-console
    console.info(chalk.green(`Copied ${results.length} files`))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(chalk.red(`Copy failed: ${error} \n`))
  }
}

export default recursiveCopy
