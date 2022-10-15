import { Grid, GridItem, Td, Tr, useQuery } from '@chakra-ui/react'
import { FC } from 'react'

type ChampInfoProp = {
  champName: string
}

export const ChampInfo: FC<ChampInfoProp> = ({ champName }) => {
  return (
    <Grid templateRows={'repeat(5, 1fr)'} templateColumns={'repeat(5, 1fr)'}>
      <GridItem rowSpan={2} rowStart={2} colSpan={2} colStart={2}>
        <label>{champName}</label>
      </GridItem>
    </Grid>
  )
}
