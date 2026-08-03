import sanityPluginKitOxlint from '@sanity/plugin-kit/oxlint'
import {defineConfig} from 'oxlint'

export default defineConfig({
  ...sanityPluginKitOxlint,
  ignorePatterns: [...(sanityPluginKitOxlint.ignorePatterns ?? []), 'v2-incompatible.js'],
})
