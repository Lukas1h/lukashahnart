<script>
	let { timestamp, media_url, isCurrent = true } = $props();
	import IntersectionObserver from 'svelte-intersection-observer';

	let intersecting = $state(false);
	let element = $state(undefined);
</script>

<IntersectionObserver rootMargin={'-200px'} {element} bind:intersecting>
	<div class={`inner-container carousel-item ${!isCurrent ? 'hidden' : ''}`} bind:this={element}>
		<div class="side-text">
			<p>@lukashahnart</p>
			<p>
				{new Date(timestamp).toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
		</div>
		<div style="width: 100%; background-color:var(--foreground-color);">
			<img src={media_url} alt="" />
		</div>
	</div>
	<!-- <div class="bottom-text">
		<p>{post.caption}</p>
	</div> -->
</IntersectionObserver>

<style>
	.hidden {
		opacity: 0.2;
		transform: scale(0.9);
	}

	.inner-container {
		display: flex;
		transition: all 0.4s;
	}

	.side-text {
		font-family: 'Caprasimo', sans-serif;
		font-size: calc(var(--image-width) * 0.06);
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
