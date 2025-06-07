module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['ybunarn prettier:write', 'bun eslint:fix'],
  '*.{js,jsx,ts,tsx}': [
    'node scripts/find-deadcode.js',
    "bun eslint --rule '@typescript-eslint/no-unused-vars:error' --rule 'react/no-unknown-property:error' --fix",
  ],
};
