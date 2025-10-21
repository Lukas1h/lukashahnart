<script>
	// @ts-nocheck

	import InstagramFeedItem from './InstagramFeedRow.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import WavyDivider from '$lib/components/ui/WavyDivider.svelte';
	import { onMount } from 'svelte';
	let { posts } = $props();

	let intersectionElement = $state(undefined);
</script>

<Section title="Instagram" alt overflow={true}>
	<div class="posts-container">
		{#each posts.filter((e) => {
			return e.media_type === 'IMAGE' || e.media_type === 'CAROUSEL_ALBUM';
		}) as post}
			<InstagramFeedItem {post} {intersectionElement} />
		{/each}
	</div>
</Section>

<div class="intersection-element-container">
	<div id="intersection-element" bind:this={intersectionElement} hidden></div>
</div>

<style>
	.posts-container {
		display: flex;
		flex-direction: column;
		gap: 4rem;
		margin-top: 4rem;
	}

	.intersection-element-container {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
	}

	#intersection-element {
		opacity: 0.1;
		background-color: red;
		width: 80%;
		height: 80%;
		max-width: 50rem;
	}
</style>
