module.exports = {
  globals: {
    L: true
  },
  root: true,
  env: {
    node: true,
    es6: true
  },
  rules: {
    'no-console': 2,
    'no-useless-escape': 0,
    'no-multiple-empty-lines': [
      2,
      {
        max: 3
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        insertPragma: true,
        requirePragma: false
      }
    ]
  },
  plugins: [],
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
