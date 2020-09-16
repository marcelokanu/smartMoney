module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'react-native/no-inline-styles': 'false',
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error'
  }
}
