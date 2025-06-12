<script>
	// @ts-nocheck

	import InstagramFeedItem from './InstagramFeedItem.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import WavyDivider from '$lib/components/ui/WavyDivider.svelte';
	import { onMount } from 'svelte';
	let { posts } = $props();
</script>

<Section title="Instagram" alt>
	<div class="posts-container">
		{#each posts.filter((e) => {
			return e.media_type === 'IMAGE' || e.media_type === 'CAROUSEL_ALBUM';
		}) as post}
			<InstagramFeedItem {post} />
		{/each}
	</div>
</Section>

<style>
	.posts-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
