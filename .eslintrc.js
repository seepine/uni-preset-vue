module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended', // 添加 prettier 插件
    './.eslintrc-auto-import.json'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    extraFileExtensions: ['.vue']
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
