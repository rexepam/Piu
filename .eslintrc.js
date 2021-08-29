// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'no-unused-vars': 1,
  },
  ignorePatterns: ['node_modules', 'ios', 'android', '__tests__'],
};
