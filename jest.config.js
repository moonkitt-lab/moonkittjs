// cosmjs 0.38 depends on ESM-only packages, which jest has to transpile
const esmOnlyPackages = ['@scure', '@noble'];

module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.test.(ts|js)'],
  // generated sources import their siblings with an explicit ".js" extension
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.(ts|js|mjs)$': [
      'ts-jest',
      {
        diagnostics: false,
        tsconfig: { allowJs: true, module: 'commonjs', target: 'es2022', esModuleInterop: true, isolatedModules: true }
      }
    ]
  },
  transformIgnorePatterns: [`/node_modules/(?!(${esmOnlyPackages.join('|')})/)`]
};
