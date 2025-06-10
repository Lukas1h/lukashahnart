<script>
	let { post } = $props();
</script>

<div class="container">
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
