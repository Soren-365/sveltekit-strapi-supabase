<script>
// @ts-nocheck

	import { onMount } from 'svelte';
  import  content  from '../../../lib/shared/stores/content.ts'
	let imageData;
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
	onMount(async () => {
		const response = await fetch('http://localhost:1337/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query })
		});
		content.update( response.data);
	});
</script>


<div> {#if $content}
  <h2>
      {$content}
  </h2>
  <img src={$content} alt="Country Flag" />
{:else}
  <p>loading...</p>
{/if}</div>