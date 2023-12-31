module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "plugin:storybook/recommended"
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    "eol-last": 0,
    'indent': 'off',
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
