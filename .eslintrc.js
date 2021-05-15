module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 2,
    'no-lonely-if': 2,
    'react/react-in-jsx-scope': 0,
  },
};
