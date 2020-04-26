<script>
	import Nav from '../components/Nav.svelte';
	import { afterUpdate } from 'svelte';

	export let segment;

	afterUpdate(() => {
		scratchblocks.renderMatching("code.blocks", { style: "scratch3", languages: ["nb"] })
	});
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
