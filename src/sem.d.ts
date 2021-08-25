declare interface Window {
  __SEM_CONFIG?: SemConfig
}

declare interface SemConfig {
  common?: SemCommonConfig
  dropdown?: SemDropdownConfig
  input?: SemInputConfig
  modal?: SemModalConfig
}

declare interface SemCommonConfig {
  debug?: boolean
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
