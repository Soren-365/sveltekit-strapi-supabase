import { writable } from 'svelte/store';
import { onMount } from 'svelte';
import { baseStyle, requestStyle, succesStyle } from '../../../lib/commStyles';

// @ts-ignore

// @ts-ignore
let imageData;
// @ts-ignore
let query = `
      {
image(id: 1) {
  id
  ImageTitle
  ImageFile {
    id
    url
    mime
    provider
    created_at
    name
    width
    height
    formats
  }
}
}
`;

const firstLoad = onMount(async () => {
	const response = await fetch('http://localhost:1337/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query })
	}).then((result) => {
		// Do things with result
		//  const parsedResult = JSON.parse(result)
		console.log('%cStream recieved', 'color: orange');
		console.log('%cfetch.js: recieved RAW from php/ajax:', succesStyle);
		console.log(result);
	});
	return response;
});

console.log('%cfetch.js: me_php_object (the static data to client): ', baseStyle);

const loading = writable(false);
const error = writable(false);
const data = writable(firstLoad);

export function contentStore() {
	// @ts-ignore
	async function update() {
		loading.set(true);
		error.set(false);
  }

	// @ts-ignore
	return [data, loading, error, update_db];
}

/**
 * @param {any} query
 */
// @ts-ignore
export async function query(query) {
	const response = await fetch('http://localhost:1337/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query })
	}).then((result) => {
		// Do things with result
		//  const parsedResult = JSON.parse(result)
		console.log('%cgraph recieved:', succesStyle);
		console.log(result);
	});
	return response;
}

// @ts-ignore
