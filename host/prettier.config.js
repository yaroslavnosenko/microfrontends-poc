/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  printWidth: 80,
}

export default config
