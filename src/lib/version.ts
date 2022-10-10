import chalk from 'chalk'

export const version = () => {
  // eslint-disable-next-line no-console, @typescript-eslint/restrict-template-expressions
  console.info(chalk.green(`CLI version: ${process.env.npm_package_version} \n`))
}

export default version
