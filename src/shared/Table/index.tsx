import styles from './table.module.scss'
import { ReactNode } from 'react'

export interface Column<T> {
  title: string
  dataIndex: keyof T
}

interface TableProps<T extends { id: string }> {
  data: T[]
  columns: Column<T>[]
}

const Table = <T extends { id: string }>(props: TableProps<T>) => {
  const renderTableHeader = () => {
    return (
      <div className={styles.tableRow}>
        {props.columns.map((column, index) => (
          <div key={index} className={styles.tableHeaderCell}>
            {column.title}
          </div>
        ))}
      </div>
    )
  }

  const renderTableRows = () => {
    return props.data.map((item, index) => (
      <div key={index} className={styles.tableRow}>
        {props.columns.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.tableCell}>
            {item[column.dataIndex] as ReactNode}
          </div>
        ))}
      </div>
    ))
  }

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.tableHead}>{renderTableHeader()}</div>
        <div className={styles.tableBody}>{renderTableRows()}</div>
      </div>
    </div>
  )
}

export default Table
