module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-native", "@typescript-eslint"],
  rules: {
    "no-console": "off",
    "no-use-before-define": "off",
    "no-var": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-unused-styles": "error",
    "react/style-prop-object": "off",
  },
};
