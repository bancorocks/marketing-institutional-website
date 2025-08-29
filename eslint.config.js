// ESLint v9 Flat Config
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    // Ignores build artifacts and configs
    ignores: ['dist', 'build', '.vite', 'coverage', 'node_modules'],
  },
  // Base JS rules
  js.configs.recommended,
  // TypeScript (parser + plugin)
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: false, // Keep it fast without TS project references
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  // React + Hooks
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // Accessibility
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
  // Prettier integration
  {
    rules: {
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
]
