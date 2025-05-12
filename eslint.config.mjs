import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginVue from 'eslint-plugin-vue'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/public/js/*.js', '**/*.config.js', '**/*.cy.js'],
  },
   ...pluginVue.configs['flat/essential'],
  ...compat.extends(
    'eslint:recommended'
  ),
  {
    rules: {
      'no-undef': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
  ...compat.extends('plugin:cypress/recommended').map((config) => ({
    ...config,
    files: ['cypress/integration/**.spec.{js,ts,jsx,tsx}'],
  })),
];
