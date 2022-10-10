/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  overrides: [
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        // Prevents "unresolved" when using "paths"
        // project: ['./tsconfig.json'],
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        //
      },
    },
  ],
}
