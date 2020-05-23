module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 'off',
    'no-params-rassign': 'off',
    'max-len': ['error', {code: 200}],
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
};
