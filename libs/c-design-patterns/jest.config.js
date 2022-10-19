module.exports = {
  displayName: 'c-design-patterns',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: true,

    },
  },
  coverageDirectory: '../../coverage/libs/c-design-patterns',
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  reporters: [
    ["jest-silent-reporter", { "showWarnings": true }],
    ["jest-junit", {outputDirectory: "coverage/libs/c-design-patterns", outputName: `test-results-junit.xml`, suiteName: 'c-design-patterns jest tests'}]
  ]
};
