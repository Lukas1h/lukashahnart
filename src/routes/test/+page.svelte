<div>
	<div class="row">
		<div class="image"></div>
		<div class="image"></div>
	</div>

	<div class="row">
		<div class="image"></div>
	</div>

	<div class="row">
		<div class="image"></div>
		<div class="image"></div>
		<div class="image"></div>
		<div class="image"></div>
	</div>

	<div class="row">
		<div class="image"></div>
		<div class="image"></div>
	</div>
</div>

<style>
	.row {
		--image-width: 20rem;

		display: flex;
		width: 100%;
		flex-shrink: 0;
		box-sizing: border-box;
		margin: 1rem;
		gap: 1rem;
		overflow: scroll;
		padding-left: calc(50% - (var(--image-width) / 2));
		padding-right: calc(50% - 10rem);

		scrollbar-width: none;

		scroll-snap-type: x mandatory;
		/* scroll-padding: 50%; */
	}

	.row::-webkit-scrollbar {
		display: none;
	}

	.image {
		flex-shrink: 0;
		background: blue;
		width: var(--image-width);
		aspect-ratio: 5/5;
		scroll-snap-align: center;
	}
</style>
