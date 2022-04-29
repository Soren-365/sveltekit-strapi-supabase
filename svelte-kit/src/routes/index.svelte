<script>
	import MyButton from '../../components/active/myButton/InfoButton.svelte';
	import Form from '../../components/active/form/Form.svelte';
	// The page always has access to props from `get`...
	export let data;
	// ...plus props from `post` when the page is rendered
	// in response to a POST request, for example after
	// submitting the form below
	export let errors;

	const devMode = import.meta.env.PRODUCTION ? 'Production mode' : 'Development mode';
</script>

<svelte:head>
	<title>1 year free</title>
</svelte:head>

<main>
	<!-- <h4>Hello, this is {devMode} {import.meta.env.HASURA_DB_URL} {import.meta.env.VITE_MESSAGE}</h4> -->
	<h4>Hello, we are the avantweb development team</h4>

	<h1>Get a website with our "1 year free"* offer:</h1>
	<MyButton />

	<p>This is <a href="/values"> our values</a></p>

	<!-- {#each items as item}
	<Preview item={item}/>
  {/each} -->

	<!-- <form method="post">
		{#if data}
			<p class="data">
				<!-- {Object.values(Object.values()[0])} -->
				<!-- {#each data.formSubmission as entry}
					<ul>
						{#each Object.entries(entry) as [cat_key, cat_val] (cat_key)}
							<div>{cat_key}: {cat_val}</div>
						{/each}
					</ul>
				{/each}
			</p>
		{/if}

		{#if errors?.title}
			<p class="error">{errors.title}</p>
		{/if} -->

		<!-- <label for="newsletter">Newsletter</label> -->
		
	<!-- </form> --> 

	<Form />
	<div class="newsletter">
		<input type="text" name="newsletter" placeholder="email" />
		<button type="submit">No thanks, Just the newsletter for now</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

	.newsletter {
		margin-top:70px;
	}
	@media only screen and (max-width: 600px) {
		main {
			text-align: center;
			padding: 1em;
			max-width: 320px;
			margin: 0 auto;
		}
	}
</style>
