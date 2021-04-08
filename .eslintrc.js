module.exports = {
  root: true, // 根目录的配置文件， 编辑器会由当前目录向上查找， 如果找到 `roor = true`的文件， 则不再查找
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  extends: [
    // "@vue/prettier",
    'plugin:vue/essential',
    // "plugin:vue/recommended",
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-parens': 2, //开启禁止非必要的括号
    'no-extra-semi': 2, //开启禁止多余的冒号
    'no-irregular-whitespace': 2, //开启不能有不规则的空格
    'no-empty': 0, // 关闭不能为空的代码块规则
    'no-unused-vars': 0, // 关闭参数没用到，或者引用没使用报错
    'no-console': 0, // 关闭 打包时对console的限制
    semi: [2, 'never'], // 无分号
    'no-unused-labels': 0,
    'vue/no-parsing-error': 0,
    'vue/require-component-is': 0,
    'no-constant-condition': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'no-extra-parens': 0,
    'vue/no-unused-components': 0,
    'vue/no-multiple-template-root': 0,
    'vue/comment-directive': 0,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    quotes: [
      // 单引号
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}