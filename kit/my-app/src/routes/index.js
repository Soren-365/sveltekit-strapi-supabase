

// import { GraphQLClient, gql } from 'graphql-request'

//   /** @type {import('./index').RequestHandler} */
// export async function get() {
//   const endpoint = 'https://crisp-owl-52.hasura.app/v1/graphql'

//   const graphQLClient = new GraphQLClient(endpoint)


//   graphQLClient.setHeader('x-hasura-admin-secret', '9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8')


//   const query = gql`
//     query MyQuery {
//      formSubmission {
//        id
//        name
//        email
//        project_type
//        call_me
//      }
//    }
//   `

//   const data = await graphQLClient.request(query)
//    console.log("rawData", data, typeof(data))
//   //  console.log(JSON.parse(rawData, undefined))

//   // const data = JSON.parse(rawData, undefined)
//  // get().catch((error) => console.error(error))

// return {body: { data }}

// }








// //   /** @type {import('./index').RequestHandler<{
// //  *   name: string;
// //  * }>} */
// // export async function get() {
// //   const query = `query MyQuery {
// //     formSubmission {
// //       id
// //       name
// //       email
// //       project_type
// //       call_me
// //     }
// //   }`

// //   const items = await db.query(query);
 
// //   return {
// //     body: { items }
// //   };
// // }

// // /** @type {import('@sveltejs/kit').RequestHandler<{
// //  *   query: string;
// //  * }>} */

// // export async function get({ params }) {
// //   // `params.id` comes from [id].js
// //   const item = await db.query(params.query);
 
// //   if (item) {
// //     return {
// //       body: { item }
// //     };
// //   }
 
// //   return {
// //     status: 404
// //   };
// // }