import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const resolvePath = (filePath: string) => {
  const resolvedPath = path.resolve(__dirname, '..', '..', `configs/${filePath}`)

  return resolvedPath
}

export default resolvePath
