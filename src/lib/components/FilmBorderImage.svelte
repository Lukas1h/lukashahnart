<script>
	let { href } = $props();
</script>

<div class="container">
	<img class="image" src={href} alt="" />
	<img class="border" src="/border.png" alt="" />
</div>

<style>
	.container {
		display: grid;
		position: relative;
		place-items: center;
	}
	.border {
		grid-area: 1/1;
		width: 100%;
		height: 100%;
	}
	.image {
		grid-area: 1/1;
		width: 100%;
	}

	.poloroid {
		width: 150px;
		height: 134.4px;
		overflow: hidden;
		background-image: url('/border.png'), var(--image); /* Use background-image */
		background-repeat: no-repeat; /* Prevent tiling */
		background-position: center; /* Center the image */
		background-size:
			150px 134.4px,
			cover; /* Scale the image to cover the div */
		display: block;
	}
</style>
