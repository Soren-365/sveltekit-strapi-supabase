
<script>
    let state = false;


    </script>
<button class:active={state} on:click="{() => state = !state}">Click Me!</button>

<style>
	.active {
		background-color: pink;
	}
</style>