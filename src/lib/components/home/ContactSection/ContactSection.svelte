<script>
	import Section from '$lib/components/ui/Section.svelte';
	import SectionBody from '$lib/components/ui/SectionBody.svelte';
</script>

<Section title="Contact">
	<SectionBody>
		<p>
			Feel free to send me an email at <br /><a href="mailto:lukas@lukashahn.art"
				>lukas@lukashahn.art</a
			><br />
			<br />
			or DM me on Instagram <br /><a href="https://instagram.com/lukashahnart">@lukashahnart</a>.<br
			/>
		</p>
	</SectionBody>
</Section>

<style lang="scss">
	p {
		font-size: 1.45rem;
		line-height: 2rem;
		font-weight: 300;
	}

	a {
		font-size: 2rem;
		font-weight: 800;
		text-decoration-thickness: 0.3rem;
	}
</style>
