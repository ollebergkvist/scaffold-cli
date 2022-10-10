/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['**/*.yml'],
      extends: ['plugin:yml/recommended'],
    },
  ],
}
