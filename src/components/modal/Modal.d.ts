declare namespace Sem {
  interface ModalConfig extends CommonConfig {
    closeIcon?: boolean
    teleport?: string
  }

  interface ModalRef {
    open: () => void
    close: () => void
  }
}
