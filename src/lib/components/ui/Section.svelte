<script>
	import WavyDivider from '$lib/components/ui/WavyDivider.svelte';

	let { title, children, alt = false, overflow = false } = $props();
</script>

<section class="page-section" style={overflow ? '' : 'max-width:50rem; padding:1rem;'}>
	<div class="header">
		<h1>{title}</h1>
		<WavyDivider direction={alt ? 'left' : 'right'} />
	</div>
	{@render children?.()}
</section>

<style lang="scss">
	section {
		width: 100%;
		margin-bottom: 10rem;
	}

	.header {
		max-width: 50rem;
		margin: auto;
	}

	h1 {
		font-family: 'Staatliches';
		font-style: normal;
		font-weight: 400;
		font-size: 3rem;
		line-height: 2rem;
		text-align: center;
	}
</style>
