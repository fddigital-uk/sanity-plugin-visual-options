import {defineConfig} from '@sanity/pkg-utils'
import postcss from 'rollup-plugin-postcss'

export default defineConfig({
  dts: 'rolldown',
  dist: 'dist',
  tsconfig: 'tsconfig.dist.json',

  // Remove this block to enable strict export validation
  extract: {
    rules: {
      'ae-incompatible-release-tags': 'off',
      'ae-internal-missing-underscore': 'off',
      'ae-missing-release-tag': 'off',
    },
  },

  rollup: {
    plugins: [postcss({modules: true})],
  },
})
