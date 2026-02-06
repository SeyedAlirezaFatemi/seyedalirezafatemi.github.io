import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['warn', { usePrettierrc: true }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
];
