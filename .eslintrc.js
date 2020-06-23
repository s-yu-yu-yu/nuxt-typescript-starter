module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    // 使っていない変数でwarn
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // console.log, console.infoはwarn
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // タグが一行なら閉じタグは改行しない
    // タグが複数行なら閉じタグを改行する
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    // 不要なカッコは消す
    'no-extra-parens': 1,
    // 無駄なスペースは削除
    'no-multi-spaces': 2,
    // 不要な空白行は削除。2行開けてたらエラー
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 関数とカッコはあけない(function hoge() {/** */})
    'func-call-spacing': [2, 'never'],
    // true/falseを無駄に使うな
    'no-unneeded-ternary': 2,
    // セミコロンを常に置く
    semi: ['error', 'always'],
    // 文字列はシングルクオートのみ
    quotes: [2, 'single'],
    // varは禁止
    'no-var': 2,
    // jsのインデントは２
    indent: [2, 2],
    // かっこの中はスペースなし！違和感
    'space-in-parens': [2, 'never'],
    // カンマの前後にスペース入れる？
    'comma-spacing': 2,
    // 配列のindexには空白入れるな(hogehoge[ x ])
    'computed-property-spacing': 2,
    // キー
    'key-spacing': 2,
    // キーワードの前後には適切なスペースを
    'keyword-spacing': 2
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ]
};
