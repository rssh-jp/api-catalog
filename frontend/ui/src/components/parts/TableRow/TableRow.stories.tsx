import { Table, Tbody } from '@chakra-ui/react'
import { ComponentStoryObj } from '@storybook/react'
import { TableRow } from './TableRow'

type Story = ComponentStoryObj<typeof TableRow>

export default {
  args: {
    col1: 'nice',
    col2: 'good',
    col3: 'exellent',
    backgroundColor: 'red.200',
  },
  component: TableRow,
  title: 'parts/TableRow',
}

export const Default: Story = {
  render: (arguments_) => (
    <Table>
      <Tbody>
        <TableRow {...arguments_} />
      </Tbody>
    </Table>
  ),
}
