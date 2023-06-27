module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-var': 'error',
    'no-use-before-define': 'off',
    'react-native/no-color-literals': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    'react/style-prop-object': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
  },
};
