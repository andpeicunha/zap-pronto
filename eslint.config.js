module.exports = [
  {
    files: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'],
    ignores: ['**/*.config.js', 'node_modules/*', '.next/*'],
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
];
