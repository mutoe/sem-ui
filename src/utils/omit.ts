function omit<T extends Record<string, any>, K extends keyof T> (obj: T, props: K[]): Omit<T, K>
function omit<T extends Record<string, any>, K extends keyof T> (obj: T, ...props: K[]): Omit<T, K>
function omit<T extends Record<string, any>, K extends keyof T> (obj: T, ...propsArg: K[] | [K[]]): Omit<T, K> {
  let props: K[]
  if (propsArg.length === 1 && Array.isArray(propsArg[0])) {
    props = propsArg[0]
  } else {
    props = propsArg as K[]
  }
  const result = Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k as K)))
  return result as Omit<T, K>
}

export default omit
