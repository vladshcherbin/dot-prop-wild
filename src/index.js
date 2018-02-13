function isObject(value) {
  return value != null && typeof value === 'object' && Array.isArray(value) === false
}

function isArray(value) {
  return Array.isArray(value)
}

function isString(value) {
  return typeof value === 'string'
}

function splitPath(path) {
  const pathParts = path.split('.')
  const result = []

  for (let i = 0; i < pathParts.length; i += 1) {
    let part = pathParts[i]

    while (part.slice(-1) === '\\' && pathParts[i + 1] !== undefined) {
      part = `${part.slice(0, -1)}.${pathParts[i += 1]}`
    }

    result.push(part)
  }

  return result
}

function getArrayValues(data, path) {
  const values = []

  for (let i = 0; i < data.length; i += 1) {
    const item = data[i]

    if (path === '*') {
      if (isArray(item.value) && item.value.length > 0) {
        item.value.forEach((value, index) => {
          values.push({
            path: `${item.path}.${index}`,
            value
          })
        })
      }
    } else {
      values.push({
        path: `${item.path}.${path}`,
        value: item.value ? item.value[path] : undefined
      })
    }
  }

  return values
}

function appendArrayIndex(data) {
  return data.value.map((value, index) => ({
    path: data.path ? `${data.path}.${index}` : `${index}`,
    value: data.value[index]
  }))
}

export default function get(data, path) {
  if (!(isObject(data) || isArray(data)) || !isString(path)) {
    return data
  }

  const pathParts = splitPath(path)
  let result = {
    path: '',
    value: data
  }

  for (let i = 0; i < pathParts.length; i += 1) {
    const part = pathParts[i]

    if (isArray(result)) {
      result = getArrayValues(result, part)

      if (result.length === 0) {
        break
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (part === '*') {
        if (isArray(result.value) && result.value.length > 0) {
          result = appendArrayIndex(result)
        } else {
          result = []

          break
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (isObject(result.value)) {
          result = {
            path: result.path ? `${result.path}.${part}` : part,
            value: result.value[part]
          }
        } else {
          result = {
            path,
            value: undefined
          }

          break
        }
      }
    }
  }

  return result
}
