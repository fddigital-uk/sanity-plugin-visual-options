function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export function isVisualOptionsObjectList(list) {
  return isPlainObject(list)
}

export function toSanityList(visualOptions) {
  return Object.entries(visualOptions).map(([value, item]) => ({
    title: item?.name ?? value,
    value,
  }))
}

function normalizeVisualOptionsField(field) {
  if (!field || typeof field !== 'object') {
    return field
  }

  let normalized = field

  if (field.type === 'visualOptions') {
    const visualOptions =
      field.options?.visualOptions ??
      (isVisualOptionsObjectList(field.options?.list) ? field.options.list : null)

    if (visualOptions) {
      normalized = {
        ...field,
        options: {
          ...field.options,
          visualOptions,
          list: toSanityList(visualOptions),
        },
      }
    }
  }

  if (Array.isArray(normalized.fields)) {
    normalized = {
      ...normalized,
      fields: normalized.fields.map(normalizeVisualOptionsField),
    }
  }

  if (Array.isArray(normalized.of)) {
    normalized = {
      ...normalized,
      of: normalized.of.map(normalizeVisualOptionsInType),
    }
  }

  return normalized
}

function normalizeVisualOptionsInType(typeDef) {
  if (!typeDef || typeof typeDef !== 'object') {
    return typeDef
  }

  let normalized = typeDef

  if (Array.isArray(typeDef.fields)) {
    normalized = {
      ...normalized,
      fields: typeDef.fields.map(normalizeVisualOptionsField),
    }
  }

  if (Array.isArray(typeDef.of)) {
    normalized = {
      ...normalized,
      of: typeDef.of.map(normalizeVisualOptionsInType),
    }
  }

  return normalized
}

export function normalizeVisualOptionsInTypes(types = []) {
  return types.map(normalizeVisualOptionsInType)
}

export function getVisualOptionsFromSchemaType(schemaType) {
  const options = schemaType?.options

  if (!options) {
    return null
  }

  if (options.visualOptions) {
    return options.visualOptions
  }

  if (isVisualOptionsObjectList(options.list)) {
    return options.list
  }

  return null
}
