import { Td, Tr } from '@chakra-ui/react'
import { FC } from 'react'

type TableRowProp = {
  col1: string
  col2: string
  col3: string
  backgroundColor: string
}

export const TableRow: FC<TableRowProp> = ({ col1, col2, col3, backgroundColor }) => {
  return (
    <Tr bg={backgroundColor}>
      <Td>{col1}</Td>
      <Td>{col2}</Td>
      <Td>{col3}</Td>
    </Tr>
  )
}
