/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  settings: {
    // This loads <rootdir>/tsconfig.json to eslint
    'import/resolver': {
      typescript: { project: ['./tsconfig.json'] },
      alwaysTryTypes: true,
    },
  },

  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      rules: {
        'import/no-unresolved': 'error',
      },
    },
  ],
}
