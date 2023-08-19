declare type IconDefinition = any

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
    icon?: IconDefinition
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
