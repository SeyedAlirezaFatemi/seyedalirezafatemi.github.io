export default {
  '*.{js,jsx,mjs}': ['eslint --cache --fix', 'prettier --write'],
  '**/*.{css,json}': ['prettier --write'],
  '*.{ts,tsx}': [
    'eslint --cache --fix',
    () => 'tsc --project tsconfig.json --pretty --skipLibCheck --noEmit',
    'prettier --write',
  ],
};
