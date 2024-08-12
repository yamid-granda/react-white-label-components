import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'style/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
  },
})

// todo check this plugins
// "eslint-plugin-storybook": "^0.8.0",
