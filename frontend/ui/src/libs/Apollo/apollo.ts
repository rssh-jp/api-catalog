import { ApolloClient, Cache, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

let client: ApolloClient<NormalizedCacheObject> | null = null

export function NewClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache(),
  })
}

export function ClientInstance(): ApolloClient<NormalizedCacheObject> {
  client = client == null ? NewClient() : client
  return client
}
