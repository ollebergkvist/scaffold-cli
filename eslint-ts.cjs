/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  settings: {
    // This loads <rootdir>/tsconfig.json to eslint
    'import/resolver': {
      typescript: { project: ['./tsconfig.json'] },
    },
  },

  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],

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
        'plugin:prettier/recommended',
      ],
    },
  ],
}
