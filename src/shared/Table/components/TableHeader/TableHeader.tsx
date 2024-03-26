import styles from '../../table.module.scss'
interface TableHeaderProps<T extends { id: string }> {
  columns: Column<T>[]
}

export const TableHeader = <T extends { id: string }>(props: TableHeaderProps<T>) => (
  <div className={styles.tableRow}>
    {props.columns.map((column) => (
      <div className={styles.tableCell}>{column.title}</div>
    ))}
  </div>
)
