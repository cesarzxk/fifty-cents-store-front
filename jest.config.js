module.exports = {
    testPathIgnorePatterns:["/node_module/"],
    setupFilesAfterEnv:[
        "<rootDir>/src/Tests/setupTests.ts"
    ],
    transform:{
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
      },

    collectCoverage: true,
    collectCoverageFrom:[
        "src/**/*.tsx",
        "!src/**/*.test.tsx",
        "!src/Pages/**/*.tsx",
        "!src/Hooks/**/*.tsx"
    ],
    coverageReporters:["lcov", "json"]
};
