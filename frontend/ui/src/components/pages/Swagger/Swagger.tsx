import { FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'
import { gql, useQuery } from '@apollo/client'

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false })

const QUERY_SETTINGS = gql`
  query settingDetailByID($id: Int!) {
    settingDetailByID(id: $id) {
      setting {
        id
        name
        url
      }
      json
    }
  }
`
interface SwaggerContainerProps {
  id: number
}

export const SwaggerContainer: FC<SwaggerContainerProps> = ({ id }: SwaggerContainerProps) => {
  const { loading, data, error } = useQuery(QUERY_SETTINGS, {
    variables: { id: id },
  })

  const [spec, setSpec] = useState('')

  useEffect(() => {
    if (data == null) {
      return
    }
    setSpec(data.settingDetailByID.json)
  }, [data])

  return (
    <>
      {id}
      <SwaggerUI spec={spec} />
    </>
  )
}
