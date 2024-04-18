import { AgGridReact } from 'ag-grid-react'
import { useEffect, useState } from 'react'
import { ICol } from './types'

interface ColDef<T> extends ICol<T> {
  field: keyof T | any
}

interface IProps<T> {
  cols: ColDef<T>[]
  data: T[] | []
}

function Table<T>({ cols, data }: IProps<T>) {
  const [rowData, setRowData] = useState<Array<T>>([])

  useEffect(() => {
    if (data) {
      setRowData(data)
    }
  }, [data])

  return (
    <>
      <div className="ag-theme-quartz" style={{ minHeight: '100vh', flex: 1 }}>
        <AgGridReact<T>
          rowData={rowData}
          columnDefs={cols}
          autoSizeStrategy={{ type: 'fitGridWidth' }}
        />
      </div>
    </>
  )
}

export default Table
