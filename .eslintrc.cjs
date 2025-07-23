module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    // Core rules
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    
    // TypeScript rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    
    // Disable rules that conflict with Storybook
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-func-assign': 'off'
  },
  ignorePatterns: [
    'dist/**',
    'storybook-static/**',
    '**/*.config.js',
    '**/*.config.cjs',
    '.storybook/main.js',
    'coverage/**'
  ],
  globals: {
    // Storybook globals
    __STORYBOOK_MODULE_TEST__: true,
    __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__: true,
    __STORYBOOK_ROUTER__: true,
    __STORYBOOK_TYPES__: true,
    __REACT_DOM_CLIENT__: true,
    __REACT_DOM__: true,
    __webpack_nonce__: true,
    // Testing globals
    jest: true,
    describe: true,
    it: true,
    expect: true
  },
    overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
}