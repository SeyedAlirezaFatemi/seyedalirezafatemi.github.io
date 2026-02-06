import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    rules: {
      'prettier/prettier': ['warn', { usePrettierrc: true }],
      '@typescript-eslint/consistent-type-imports': 'error',
      // Disable rule that's incompatible between @typescript-eslint/eslint-plugin v7 and ESLint v9
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
