import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
