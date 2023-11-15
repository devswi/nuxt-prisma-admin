module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: ['vitest'],
  rules: {
    // General
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { before: false, after: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'space-before-blocks': ['error', 'always'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-newline': ['error', { multiline: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    // -- import --
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/namespace': 'off',

    // Typescript
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],

    // Vuejs
    'vue/multi-word-component-names': 0,
    'vue/html-indent': ['error', 2],
    'vue/comma-spacing': ['error', { before: false, after: true }],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 0 },
    ],
    'vue/keyword-spacing': ['error', { before: true, after: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': [
      'error',
      'stroustrup',
      { allowSingleLine: true },
    ],
    'vue/space-infix-ops': ['error', { int32Hint: false }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5,
        },
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
  },
}
