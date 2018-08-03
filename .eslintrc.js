module.exports = {
  'env': {
    "browser": true,
    'es6': true,
  },
  'extends': ['eslint:recommended', 'airbnb'],
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
  'extends': ['eslint:recommended', 'airbnb'],
};
