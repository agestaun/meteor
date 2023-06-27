module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'no-use-before-define': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react/style-prop-object': 'off',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
  },
};
