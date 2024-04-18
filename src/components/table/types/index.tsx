interface ICol<T> {
  headerName?: string
  field: keyof T
  cellRenderer?: JSX.Element
}

export type { ICol }
