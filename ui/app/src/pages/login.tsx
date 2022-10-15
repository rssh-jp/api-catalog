import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Login } from '../components/pages/Login/Login'

const LoginPage: NextPage = () => {
  const router = useRouter()

  const { path } = router.query

  console.log('++++++++++', path)
  return (
    <>
      <Login />
    </>
  )
}

export default LoginPage
