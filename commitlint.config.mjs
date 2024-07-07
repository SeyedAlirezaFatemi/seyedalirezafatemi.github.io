import configConventional from '@commitlint/config-conventional';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...configConventional.rules,
    'type-enum': [
      2,
      'always',
      ['hotfix', ...configConventional.rules['type-enum'][2]],
    ],
  },
};
