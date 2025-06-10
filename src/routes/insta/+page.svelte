<script>
	import InstagramFeed from '$lib/components/InstagramFeedSection.svelte';
</script>

<InstagramFeed></InstagramFeed>

<div class="container">
	<div class="inner-container">
		<div class="side-text">
			<p>@lukashahnart</p>
			<p>May 2nd</p>
		</div>
		<div style="width: 100%; aspect-ratio:3/4; background-color:var(--foreground-color);">
			<img src="/img.jpg" alt="" />
		</div>
	</div>
	<div class="bottom-text">
		<p>Probably too much film grain 😜</p>
	</div>
</div>

<style>
	.container {
		max-width: 500px;
		margin: 2rem auto;
	}

	.inner-container {
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
