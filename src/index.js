import {definePlugin, defineType} from 'sanity'

import VisualOptions from './components'
import {normalizeVisualOptionsInTypes} from './normalizeVisualOptionsSchema'
import VisualOptionsStudioLayout from './VisualOptionsStudioLayout.jsx'

const visualOptionsType = defineType({
  title: 'Visual Options',
  type: 'string',
  name: 'visualOptions',
  components: {
    input: VisualOptions,
  },
})

export const visualOptions = definePlugin({
  name: 'sanity-plugin-visual-options',
  schema: {
    types: (prevTypes = []) => {
      const withType = prevTypes.some((type) => type?.name === 'visualOptions')
        ? prevTypes
        : [...prevTypes, visualOptionsType]

      return normalizeVisualOptionsInTypes(withType)
    },
  },
  studio: {
    components: {
      layout: VisualOptionsStudioLayout,
    },
  },
})
