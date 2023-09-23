const plugins = [
  'react',
  '@typescript-eslint',
  'no-relative-import-paths',
  'typescript-sort-keys',
];

const settings = {
  'import/parsers': {
    '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
    typescript: {
      project: '.',
    },
  },
  'react': {
    version: 'detect',
  },
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',

    /*
     * https://stackoverflow.com/a/44690309
     *
     * Make sure to put it last, so it gets the chance to override other configs.
     * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
     */
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins,
  rules: {
    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      { allowSameFolder: true },
    ],
  },
  settings,
  overrides: [
    // Permit require import on js(x) files (only banned on ts(x) files)
    {
      files: ['**/*.js?(x)'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
