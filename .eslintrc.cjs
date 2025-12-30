module.exports = {
    root: true,
    env: { node: true, browser: true, es2021: true },
    parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'vue/html-self-closing': ['error', { html: { void: 'never', normal: 'always', component: 'always' } }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: { parser: '@babel/eslint-parser' },
        },
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
        },
    ],
}

