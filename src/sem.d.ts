
declare interface Window {
  __SEM_CONFIG?: Sem.Config
}

declare namespace Sem {

  interface Config {
    common?: CommonConfig
    dropdown?: DropdownConfig
    input?: InputConfig
    modal?: ModalConfig
  }

  interface CommonConfig {
    debug?: boolean
  }

  interface Option<V = string | number> {
    value: V
    onClick?: (event: Event, value: V) => void
    text?: string
    description?: string
    hidden?: boolean
    disabled?: boolean
    divider?: boolean
    // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    icon?: import('@fortawesome/fontawesome-svg-core').IconDefinition
  }

  type Color =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'olive'
    | 'green'
    | 'teal'
    | 'blue'
    | 'violet'
    | 'purple'
    | 'pink'
    | 'brown'
    | 'grey'
    | 'black'
    | 'positive'
    | 'negative'
    | 'primary'
    | 'secondary'
}
