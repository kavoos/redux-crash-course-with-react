module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'parser': 'babel-eslint',
  'rules': {
    'global-require': 'off',
    'ordered-imports': true,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    "jsx-a11y/label-has-for": [
      "error", {
        "components": [ "label"  ],
        "required": {
          "every": [ "id" ]
        }
      }
    ],
  },
  'extends': ['eslint:recommended', 'airbnb'],
};
