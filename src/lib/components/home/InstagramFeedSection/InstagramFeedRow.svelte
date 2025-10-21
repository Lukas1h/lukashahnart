<script>
	// @ts-nocheck

	import IntersectionObserver from 'svelte-intersection-observer';
	import InstagramFeedMediaItem from './InstagramFeedMediaItem.svelte';
	import { onMount } from 'svelte';

	let { post, intersectionElement } = $props();

	let scrollX = $state(0);

	let currentItemIndex = $state(0);
	let row = $state(undefined);
	let windowWidth = $state(0);
	let imageWidth = $derived(Math.min(windowWidth * 0.75, 30 * 16));

	function handleScroll() {
		const scrollLeft = row.scrollLeft;
		const scrollWidth = row.scrollWidth;
		const clientWidth = row.clientWidth;

		const maxScrollLeft = scrollWidth - clientWidth;

		const numElements = post.children ? post.children.length : 1;

		const rawIndex = Math.floor((row.scrollLeft / maxScrollLeft) * numElements);
		currentItemIndex = Math.max(0, Math.min(rawIndex, numElements - 1));
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="row" onscroll={handleScroll} bind:this={row} style={`--image-width: ${imageWidth}px`}>
	{#if post.children}
		{#each post.children as media, i}
			<div class={'image'}>
				<InstagramFeedMediaItem
					timestamp={post.timestamp}
					media_url={media.media_url}
					{intersectionElement}
					isCurrent={currentItemIndex == i}
				/>
			</div>
		{/each}
	{:else}
		<div class={'image'}>
			<InstagramFeedMediaItem
				timestamp={post.timestamp}
				media_url={post.media_url}
				{intersectionElement}
			/>
		</div>
	{/if}
</div>

<style>
	.row {
		--image-width: 20rem;

		display: flex;
		width: 100%;
		flex-shrink: 0;
		box-sizing: border-box;
		/* margin: 1rem; */
		overflow: scroll;
		padding-left: calc(50% - (var(--image-width) / 2));
		padding-right: calc(50% - (var(--image-width) / 2));

		scroll-snap-type: x mandatory;

		scrollbar-width: none;
	}

	.row::-webkit-scrollbar {
		display: none;
	}

	.image {
		flex-shrink: 0;
		width: var(--image-width);
		aspect-ratio: 5/5;
		scroll-snap-align: center;
	}
</style>
