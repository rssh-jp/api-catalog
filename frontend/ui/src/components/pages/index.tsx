import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { FC } from 'react'
import { ChampInfo } from '../parts/ChampInfo/ChampInfo'
import { TableRow } from '../parts/TableRow'

type IndexProps = {}
export const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>col1</Th>
            <Th>col2</Th>
            <Th>col3</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRow col1='nice 1' col2='good 1' col3='fantastic 1' backgroundColor='green.100' />
          <TableRow col1='nice 2' col2='good 2' col3='fantastic 2' backgroundColor='' />
          <TableRow col1='nice 3' col2='good 3' col3='fantastic 3' backgroundColor='' />
        </Tbody>
      </Table>
      <ChampInfo champName='nice' />
    </>
  )
}
