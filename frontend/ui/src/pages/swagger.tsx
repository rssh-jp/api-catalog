import { useRouter } from 'next/router'
import { FC } from 'react'
import { SwaggerContainer } from '../components/pages/Swagger/Swagger'

interface SwaggerProps {}

const Swagger: FC<SwaggerProps> = ({}: SwaggerProps) => {
  const router = useRouter()
  const url = router.query.url as string
  return <SwaggerContainer url={url} />
}

export default Swagger
