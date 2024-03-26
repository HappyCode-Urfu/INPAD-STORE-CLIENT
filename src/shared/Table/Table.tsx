import { TableHeader, TableRows } from './components'

import styles from './table.module.scss'

interface TableProps<T extends { id: string }> {
  data: T[]
  columns: Column<T>[]
}

export const Table = <T extends { id: string }>(props: TableProps<T>) => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <TableHeader columns={props.columns} />
        <TableRows data={props.data} columns={props.columns} />
      </div>
    </div>
  )
}
