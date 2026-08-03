import {isVisualOptionsObjectList, toSanityList} from './normalizeVisualOptionsSchema'

function normalizeCompiledOptions(options) {
  if (!options) {
    return
  }

  const visualOptions =
    options.visualOptions ??
    (isVisualOptionsObjectList(options.list) ? options.list : null)

  if (!visualOptions || Array.isArray(options.list)) {
    return
  }

  options.visualOptions = visualOptions
  options.list = toSanityList(visualOptions)
}

function patchSchemaType(type, visited = new WeakSet()) {
  if (!type || typeof type !== 'object' || visited.has(type)) {
    return
  }

  visited.add(type)

  if (type.name === 'visualOptions') {
    normalizeCompiledOptions(type.options)
  }

  if (Array.isArray(type.fields)) {
    for (const field of type.fields) {
      patchSchemaType(field.type, visited)
    }
  }

  if (Array.isArray(type.of)) {
    for (const member of type.of) {
      patchSchemaType(member?.type ?? member, visited)
    }
  }
}

export function patchCompiledSchema(schema) {
  if (!schema?.getLocalTypeNames) {
    return
  }

  const visited = new WeakSet()

  for (const typeName of schema.getLocalTypeNames()) {
    patchSchemaType(schema.get(typeName), visited)
  }
}
