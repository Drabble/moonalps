module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  // 'rules' to add or remove checks
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    "react/no-unescaped-entities": 'off',
    'no-irregular-whitespace': "warn",
    'no-var': 2,
    'no-undef': 2,
    'no-param-reassign': 2,
  },
};
