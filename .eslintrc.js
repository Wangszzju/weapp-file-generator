module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 7
  },
  extends: "eslint:recommended",
  rules: {
    indent: [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    // 单引号
    quotes: [
      "error",
      "single"
    ],
    // 务必用分号
    semi: [
      "error",
      "always"
    ],
    "no-const-assign": 2,
    "no-var": 1,
    "no-unused-vars": 1,
    "no-undef": 2,
    "no-console": 1
  }
};
