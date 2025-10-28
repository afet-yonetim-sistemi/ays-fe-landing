import pluginQuery from '@tanstack/eslint-plugin-query'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
// @ts-expect-error: This is necessary due to a temporary workaround
import nextConfig from 'eslint-config-next'
import prettierConfig from 'eslint-config-prettier'
import { globalIgnores } from 'eslint/config'

const config = [
  ...nextConfig,
  ...pluginQuery.configs['flat/recommended'],
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'node_modules/**',
    'next-env.d.ts',
    'components.json',
    'package-lock.json',
    'yarn.lock',
    '*.tsbuildinfo',
    'coverage/**',
    '.vscode/**',
    '.idea/**',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',

      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components/ui/*'],
              message:
                'Import UI components only through the core wrapper layer instead of using Shadcn components directly.',
            },
          ],
        },
      ],

      '@next/next/no-img-element': 'warn',
    },
  },

  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components/ui/*'],
              message:
                'Import UI components only through the core wrapper layer instead of using Shadcn components directly.',
            },
          ],
        },
      ],
    },
  },

  prettierConfig,
]

export default config
