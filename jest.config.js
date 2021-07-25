/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./environment.ts'],
  reporters: [
    'default',
    ['jest-html-reporters', {
      "pageTitle": "API Test Report",
      "includeFailureMsg": true,
      "includeConsoleLog": true,
      "filename": "report.html",
      //"openReport": true
    }]
  ],
};