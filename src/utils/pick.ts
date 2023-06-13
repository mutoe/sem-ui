function pick<T extends Record<string, any>, K extends keyof T> (obj: T, props: K[]): Pick<T, K>
function pick<T extends Record<string, any>, K extends keyof T> (obj: T, ...props: K[]): Pick<T, K>
function pick<T extends Record<string, any>, K extends keyof T> (obj: T, ...propsArg: K[] | [K[]]): Pick<T, K> {
  let props: K[]
  if (propsArg.length === 1 && Array.isArray(propsArg[0])) {
    props = propsArg[0]
  } else {
    props = propsArg as K[]
  }
  const result: Partial<T> = {}
  const existingKeys = (Object.keys(obj) as (keyof T)[])
    .filter(key => props.includes(key as K))

  for (const key of existingKeys) {
    result[key] = obj[key]
  }
  return result as Pick<T, K>
}

export default pick
