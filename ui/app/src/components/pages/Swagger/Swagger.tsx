import { FC } from 'react'
import dynamic from 'next/dynamic'
import 'swagger-ui-react/swagger-ui.css'

const SwaggerUI = dynamic(import('swagger-ui-react'), { ssr: false })

interface SwaggerContainerProps {
  url: string
}

export const SwaggerContainer: FC<SwaggerContainerProps> = ({ url }: SwaggerContainerProps) => {
  return (
    <>
      {url}
      <SwaggerUI url={url} />
    </>
  )
}
