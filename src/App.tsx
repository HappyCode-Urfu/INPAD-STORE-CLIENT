import '@styles'

import Table, { Column } from './shared/Table'

const data = [
  { id: '1', name: 'Alice', age: 30 },
  { id: '2', name: 'Bob', age: 25 },
  { id: '3', name: 'Bob', age: 25 },
]

const columns: Column<(typeof data)[0]>[] = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
]

const App = () => {
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  )
}

export default App
