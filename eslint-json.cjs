/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['*.json'],
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/no-comments': 'off',
      },
    },
  ],
}
