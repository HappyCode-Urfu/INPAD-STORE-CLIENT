import { ReactNode } from 'react'

import styles from '../../table.module.scss'

interface TableRowsProps<T extends { id: string }> {
  data: T[]
  columns: Column<T>[]
}

export const TableRows = <T extends { id: string }>(props: TableRowsProps<T>) =>
  props.data.map((item, index) => (
    <div key={index} className={styles.tableRow}>
      {props.columns.map((column, columnIndex) => (
        <div key={columnIndex} className={styles.tableCell}>
          {item[column.dataIndex] as ReactNode}
        </div>
      ))}
    </div>
  ))
