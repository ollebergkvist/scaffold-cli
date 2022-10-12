import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import externals from 'rollup-plugin-node-externals'

const config = [
  {
    input: 'dist/bin/cli.js',
    output: {
      file: 'cli.js',
      format: 'cjs',
    },
    plugins: [commonjs(), externals(), nodeResolve(), typescript()],
  },
]
export default config
