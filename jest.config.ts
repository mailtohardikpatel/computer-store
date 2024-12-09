module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"], // Ignore these folders when looking for tests
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transpile TypeScript files
  },
  testMatch: ["**/tests/**/*.test.ts"],
};