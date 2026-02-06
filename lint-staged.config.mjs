export default {
  '*.{js,jsx,mjs}': [
    'eslint --cache --fix --no-warn-ignored',
    'prettier --write',
  ],
  '**/*.{css,json}': ['prettier --write'],
  '*.{ts,tsx}': [
    'eslint --cache --fix --no-warn-ignored',
    () => 'tsc --project tsconfig.json --pretty --skipLibCheck --noEmit',
    'prettier --write',
  ],
};
