declare interface Window {
  __SEM_CONFIG?: SemConfig
}

declare interface SemConfig {
  modal?: SemModalConfig
  input?: SemInputConfig
}

declare interface SemOption<V = string | number> {
  value: V
  onClick?: (event: Event, value: V) => void
  text?: string
  description?: string
  hidden?: boolean
  disabled?: boolean
  divider?: boolean
  icon?: import('@fortawesome/fontawesome-svg-core').IconDefinition
}
