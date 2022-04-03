//import { writable } from 'svelte/store';
import { succesStyle } from '$lib/commStyles';

//  let form = writable();

import { GraphQLClient, gql } from 'graphql-request';



export async function query() {
	const endpoint = 'https://crisp-owl-52.hasura.app/v1/graphql';

	const graphQLClient = new GraphQLClient(endpoint);

	graphQLClient.setHeader(
		'x-hasura-admin-secret',
		'9Yko0f3dyIz7GItzGgDrur4LeWcLf2Dre4uZIuVvBSmmDWcrQQEC0sqWkF1mrMu8'
	);

	const query = gql`
		query MyQuery {
			formSubmission {
				id
				name
				email
				project_type
				call_me
			}
		}
	`;

	const data = await graphQLClient.request(query);
	console.log('rawData', data, typeof data);
	return data
}


query().catch((error) => console.error(error));
