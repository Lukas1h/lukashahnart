<script>
	// @ts-nocheck

	import IntersectionObserver from 'svelte-intersection-observer';

	let { post } = $props();

	let element = $state(undefined);
	let intersecting = $state(false);
	let image;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.3}>
	<div class={`container ${intersecting && 'visible'}`} bind:this={element}>
		{#if post.media_type === 'CAROUSEL_ALBUM'}
			<div class="carousel">
				{#each post.children as media}
					<div class="inner-container carousel-item">
						<div class="side-text">
							<p>@lukashahnart</p>
							<p>
								{new Date(post.timestamp).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric'
								})}
							</p>
						</div>
						<div style="width: 100%; background-color:var(--foreground-color);">
							<img src={media.media_url} alt="" />
						</div>
					</div>
					<div class="bottom-text">
						<!-- <p>{post.caption}</p> -->
					</div>
				{/each}
			</div>
		{:else}
			<div class="inner-container">
				<div class="side-text">
					<p>@lukashahnart</p>
					<p>
						{new Date(post.timestamp).toLocaleDateString('en-US', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</p>
				</div>
				<div style="width: 100%; background-color:var(--foreground-color);">
					<img src={post.media_url} alt="" />
				</div>
			</div>
			<div class="bottom-text">
				<!-- <p>{post.caption}</p> -->
			</div>
		{/if}
	</div>
</IntersectionObserver>

<style>
	.carousel-item {
		flex-shrink: 0;
	}

	.carousel {
		display: flex;
		flex-direction: row;
		overflow-y: scroll;
		width: 100vw;
		gap: 1rem;
	}
	.container {
		display: flex;
		/* justify-content: center;
		align-items: center; */
		width: 100vw;
		margin: 2rem auto;
		transition: all 0.4s;
		opacity: 0.1;
		transform: scale(0.8);
	}

	.visible {
		opacity: 100;
		transform: scale(1);
	}

	.inner-container {
		max-width: 500px;
		display: flex;
	}

	.side-text {
		font-family: 'Caprasimo', sans-serif;
		font-size: 1.5rem;
		writing-mode: sideways-lr;
		display: flex;
		justify-content: space-between;
	}

	.bottom-text {
		font-family: 'Caprasimo', sans-serif;
		font-size: 1.2rem;
		text-align: right;
	}
</style>
