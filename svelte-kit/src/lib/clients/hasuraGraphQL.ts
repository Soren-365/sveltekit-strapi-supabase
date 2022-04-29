import { GraphQLClient } from 'graphql-request'

export  function hGqlClient() {
  const endpoint = <string>import.meta.env.VITE_HASURA_DB_URL

  const graphQLClient = new GraphQLClient(endpoint)

  graphQLClient.setHeader('x-hasura-admin-secret', <string>import.meta.env.VITE_HASURA_ADMIN_SECRET)

}