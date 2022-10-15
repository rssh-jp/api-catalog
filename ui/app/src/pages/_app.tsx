import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import { ClientInstance } from '../libs/Apollo/apollo'
import SimpleSidebar from '../libs/Sidebar/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  const client = ClientInstance()
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <SimpleSidebar>
          <Component {...pageProps} />
        </SimpleSidebar>
      </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp
