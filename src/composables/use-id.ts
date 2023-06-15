let n = 0

export default function useId () {
  const val = n += 1
  return `sem-${val.toString(36)}`
}
