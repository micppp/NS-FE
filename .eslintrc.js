module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
    'no-lonely-if': 2,
  },
};
