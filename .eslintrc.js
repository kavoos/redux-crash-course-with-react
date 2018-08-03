module.exports = {
  // Use the AirBnB JS styleguide - https://github.com/airbnb/javascript
  'extends': ['eslint:recommended', 'airbnb'],
  // We use 'babel-eslint' mainly for React Native Classes
  'parser': 'babel-eslint',
  'ecmaFeatures': {
    'classes': true,
  },
  'rules': {
    'ordered-imports': true,
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': ['.js', '.jsx']
      }],
    'jsx-a11y/label-has-for': [
      'error',
      {
        'components': ['label'],
        'required': { 'every': ['id'] }
      }
    ],
  },
  // Use the AirBnB JS styleguide - https://github.com/airbnb/javascript
  'extends': ['eslint:recommended', 'airbnb'],
};
