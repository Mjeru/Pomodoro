/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  // preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  setupFileAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy",
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
