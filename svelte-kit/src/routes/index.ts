
import { gql, GraphQLClient } from 'graphql-request';

const contentful = require('contentful')

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/cl2gpmayd3ayh01xm3xwwhkcz/master',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTEwMTI5MjUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsMmdwbWF5ZDNheWgwMXhtM3h3d2hrY3ovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMDU4ZGJlYmItZjg4Yi00N2NlLTg2YWQtNmZjOTc3YzRhMmE1IiwianRpIjoiY2wyZ3FndTc5M2VoYzAxejY4bWs5OHVxeSJ9.eOsJTD2sszwZyu35P0FOW4p4TogCUMujwPdEq32deRG5ZcScp2TT3HxFk-flTR3FHSnAnaVQ-APD-fbxr0NhWnCVa-WT9eE6BgSMxo9-FutCS7HKaNeu_qWGCj7JaVc1kuWMfRgCaw6Nn1EUPREgLqC8F5cgrVfYYVZtvb-lqcUZll8ET_wk7v5xgsu5Uk_3hIbq8UFBeBg2coHuzumkSO1-iNCbI5OxLJCNlqJww3384qGOflookFInx8zSXaNV4TkLIdGwyVCS2_jDDcmYulswrxo2ELNdpDDccaM-m7at4203jbPiCYnIoy0KJTNdGoLCHPA_ZyCjEClJjtDW7reDUUvErseG5GzlnwM1z_pUncOBNai4VHsGUGe7yCRuUFcw4A-UL2753alH_JUkLl9qusr2pVjUv_7GZaQprK8FXNDfZFA6zPd1eJBmI1jWAr77ub4c_z7x5gPyLhxjeNzNRVl8WOQ_EAdcHOIaYK6oE1kbt4CLfXJtp87qgc8BXdSgQCn_we3wzD3uuEv6bkqB7h8UySDsL81jQMzS5FNxo0LTPgdHcKUR_AwhsBJuou_9MXfBmIibq2F9L3Mcrvw8GnoS3tbPQsvpvh825XUFVO42iZRXyQ2t2pcNuC_Raqg-02AIMO9s6HJUe6MuruXlJt3TbTyOufflEKSnpmA'
      }
    }
  );

//export type AllArticles = AllArticlesQuery[typeof schema_table];

https://graphql.contentful.com/content/v1/spaces/6yal8citorkj/explore?access_token=xZKOHUJ5pKifqJm7l5T5eU21YOtlYu83ak3qW7z3nyc
const client = contentful.createClient({
  space: '6yal8citorkj',
  environment: '<environment_id>', // defaults to 'master' if not set
  accessToken: '<content_delivery_api_key>'
})

client.getContentType('<content_type_id>')
.then((contentType) => console.log(contentType))
.catch(console.error)

/** @type {import('./Articles').RequestHandler} */
export async function get() {


const schema_table = 'posts';
let returnObject = {}

	const query = `{  
		${schema_table} {
		id
		title
		}  
	}`;

	const {posts} = await graphcms.request(query);
  console.log('posts', posts);
	//console.log("articles check", articles)
	// const articles = (data as AllArticlesQuery)[schema_table].map((article) => {
	// 	return new Article(article);
	// });

	if (posts) {
		return {
			body: { posts }
		};
	}

	return {
		status: 404
	};
}