<script>
	import WebGl from './WebGL.svelte';
</script>

<div id="hero">
	<WebGl />
	<!-- <h1>lukashahn.art</h1>
	<h2>photography/videography</h2> -->
</div>

<style>
	#hero {
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(60vh);
		width: 100%;
		padding: 2rem;

		#shader {
			width: 100%;
			height: 100%;
		}

		h1 {
			text-align: center;
			font-family: 'Caprasimo';
			text-align: center;
			font-weight: 400;
			font-style: normal;
			font-size: calc(clamp(2rem, 10vw, 3.75rem) + 0rem);

			line-height: calc(clamp(2rem, 10vw, 3.75rem) - 0.625rem);
		}

		h2 {
			font-family: 'Aleo';
			text-align: center;
			font-weight: 400;
			font-size: calc(clamp(2rem, 10vw, 3.75rem) / 1.7);
		}
	}
</style>
