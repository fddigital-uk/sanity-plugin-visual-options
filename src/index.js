import {createPlugin, defineType} from 'sanity'
import VisualOptions from './components'

export const visualOptions = createPlugin({
  schema: {
    types: [
      defineType({
        title: 'Visual Options',
        type: 'string',
        name: 'visualOptions',
        components: {
          input: VisualOptions,
        },
      }),
    ],
  },
})
