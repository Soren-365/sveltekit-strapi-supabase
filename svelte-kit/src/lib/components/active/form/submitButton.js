

import { GraphQLClient, gql } from 'graphql-request'


export async function mutate(values) {
  const endpoint = 'https://crisp-owl-52.hasura.app/v1/graphql'

  const graphQLClient = new GraphQLClient(endpoint)


  graphQLClient.setHeader('x-hasura-admin-secret', '9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8')


  const mutation = gql`
    mutation MyMutation($city: String, $comment: String, $country: String, $email: String!, $name: String!, $newsletter: Boolean, $project_type: String, $telephone: String, $work_field: String, $start_time: date) {
  insert_formSubmission(objects: {city: $city, comment: $comment, country: $country, email: $email, name: $name, newsletter: $newsletter, project_type: $project_type, telephone: $telephone, work_field: $work_field, start_time: $start_time}){
    returning {id, name, email}
  }
}
  `

  console.log("values in mutation function", values)

  const testVariables = {
    email: "testemail@test.com",
    name: "Oscar",
    project_type: "A really big project"
  }

  const data = await graphQLClient.request(mutation, values)
   console.log("rawReturnData", data, typeof(data))
  //  console.log(JSON.parse(rawData, undefined))

  // const data = JSON.parse(rawData, undefined)
 // get().catch((error) => console.error(error))

return {body: { data }}

}
