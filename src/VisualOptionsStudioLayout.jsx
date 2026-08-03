import React, {useLayoutEffect} from 'react'
import {useSchema} from 'sanity'

import {patchCompiledSchema} from './patchCompiledSchema'

export default function VisualOptionsStudioLayout(props) {
  const schema = useSchema()

  useLayoutEffect(() => {
    if (schema) {
      patchCompiledSchema(schema)
    }
  }, [schema])

  return props.renderDefault(props)
}
