var dotenv = require('dotenv'); // eslint-disable-line
dotenv.config();

module.exports = {
  globals: process.env,
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
};
