







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