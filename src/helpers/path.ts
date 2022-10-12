import path from 'path'
import { fileURLToPath } from 'url'

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
const __filename = fileURLToPath(import.meta.url)

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
const __dirname = path.dirname(__filename)

export const resolvePath = (filePath: string) => {
  const resolvedPath = path.resolve(__dirname, '..', '..', `configs/${filePath}`)

  return resolvedPath
}

export default resolvePath
