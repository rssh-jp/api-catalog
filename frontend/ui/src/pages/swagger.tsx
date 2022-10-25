import { useRouter } from 'next/router'
import { FC } from 'react'
import { SwaggerContainer } from '../components/pages/Swagger/Swagger'

interface SwaggerProps {}

const Swagger: FC<SwaggerProps> = ({}: SwaggerProps) => {
  const router = useRouter()
  const id = parseInt(router.query.id as string, 10)
  return <SwaggerContainer id={id} />
}

export default Swagger
