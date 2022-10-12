const micromatch = require('micromatch')

module.exports = {
  '*.{js,jsx,ts,tsx,astro}': (files) => {
    const match = micromatch.not(files, 'jest.config.ts', 'cypress.config.ts')
    return `eslint ${match.join(' ')}`
  },
  '*.json': ['prettier --write'],
}
