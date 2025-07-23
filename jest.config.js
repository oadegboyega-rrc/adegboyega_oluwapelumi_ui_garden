/* eslint-disable @typescript-eslint/no-require-imports */

import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { createDefaultPreset } from 'ts-jest';

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
