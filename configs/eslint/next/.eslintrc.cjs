/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
  extends: [
    './configs/eslint-ts.cjs',
    './configs/eslint-tsx.cjs',
    './configs/eslint-json.cjs',
    './configs/eslint-yml.cjs',
  ],
}
