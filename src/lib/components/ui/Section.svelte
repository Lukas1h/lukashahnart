<script>
	import WavyDivider from '$lib/components/ui/WavyDivider.svelte';

	let { title, children, alt = false } = $props();
</script>

<section class="page-section">
	<h1>{title}</h1>
	<WavyDivider direction={alt ? 'left' : 'right'} />
	{@render children?.()}
</section>

<style lang="scss">
	section {
		width: 100%;
		padding: 2rem;
		max-width: 50rem;
		margin-bottom: 3rem;

		h1 {
			font-family: 'Staatliches';
			font-style: normal;
			font-weight: 400;
			font-size: 3rem;
			line-height: 2rem;
			text-align: center;
		}
	}
</style>
