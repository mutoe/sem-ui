declare namespace Sem {
  interface ModalConfig extends CommonConfig {
    closeIcon?: boolean
  }

  interface ModalRef {
    open: () => void
    close: () => void
  }
}
