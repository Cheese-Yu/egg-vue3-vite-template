module.exports = {
    globals: {
        "defineProps": "readonly",
        "defineEmits": "readonly",
        "defineExpose": "readonly",
        "withDefaults": "readonly"
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    extends: [
        'plugin:vue/vue3-essential',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        camelcase: 'off',
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never']
    }
}