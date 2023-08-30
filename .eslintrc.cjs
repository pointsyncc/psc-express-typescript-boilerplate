/* eslint-env node */

//add js rules
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        node: true,
        es6: true,
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        "@typescript-eslint/no-namespace": "off",
    },
    overrides: [
      {
        files: ['*.js', '*.ts'],
        rules: {
          // Add rules specific to JavaScript and TypeScript files
        },
      },
    ],
  };