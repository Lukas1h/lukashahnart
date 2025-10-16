<script>
	// @ts-nocheck

	import IntersectionObserver from 'svelte-intersection-observer';
	import InstagramFeedMediaItem from './InstagramFeedMediaItem.svelte';

	let { post, intersectionElement } = $props();
</script>

<div class="row">
	{#if post.children}
		{#each post.children as media}
			<div class={'image'}>
				<InstagramFeedMediaItem
					timestamp={post.timestamp}
					media_url={media.media_url}
					{intersectionElement}
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
		--image-width: 30rem;

		display: flex;
		width: 100%;
		flex-shrink: 0;
		box-sizing: border-box;
		margin: 1rem;
		gap: 1rem;
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
