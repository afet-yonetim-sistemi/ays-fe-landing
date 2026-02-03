const config = {
  '**/*': [
    'prettier --write',
    'eslint --fix --max-warnings 0 --no-warn-ignored',
  ],
}

export default config
