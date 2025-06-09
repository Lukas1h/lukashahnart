<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import WavyDivider from '$lib/components/ui/WavyDivider.svelte';

	let { data }: PageProps = $props();
	const categories = data.props.images;
</script>

<main>
	<!-- Hero -->
	<div id="hero">
		<h1>lukashahn.art</h1>
		<h2>photography/videography</h2>
	</div>
	<!-- Contact Section -->

	<section id="contact">
		<h1>Contact Me</h1>
		<WavyDivider />
		<p>
			Feel free to send me an email at <br /><a href="mailto:lukas@lukashahn.art"
				>lukas@lukashahn.art</a
			><br />
		</p>
		<br />
		<p>
			or DM me on Instagram <br /><a href="https://instagram.com/lukashahnart">@lukashahnart</a>.<br
			/>
		</p>
	</section>

	<!-- About Section -->
	<section id="about">
		<h1>About</h1>
		<WavyDivider direction="left" />

		<p style="font-size: 1.4rem; line-height: 2rem; margin-bottom: 2rem; ">
			<span style="display: block;"
				>I'm <span style="font-family:Caprasimo; font-size:3.8rem">Lukas Hahn</span>,</span
			>

			<span style="display: block; padding:0.5rem;"
				>a <span style="font-weight: 500; font-size:2.2rem">photographer</span> and
				<span style="font-weight: 500; font-size:2.2rem">videographer</span>
				from</span
			>
			<span
				style="margin-top:1rem; display:block; font-family: Borel; font-size:2.8rem; line-height:3.5rem;"
				>The Pacific Northwest.</span
			>
		</p>

		<p>
			<span style="font-family: Caprasimo; font-size:2rem; display:block;"
				>Since I was a kid...</span
			>
			... I’ve had a passion for capturing life—mine and others'—in fun, creative ways. When I was 10,
			I bought my first camera: an old GoPro I used for years to film family moments and make little
			YouTube videos. I learned photography on my mom’s old camera, telling stories through pictures
			of the LEGO builds I loved. Since then, I’ve started taking my hobby more seriously. I’ve worked
			on all kinds of photo and video projects—from sports and events to interviews, promotional pieces,
			weddings, and music videos for local artists.
		</p>
	</section>

	<section>
		<h1>Services</h1>
		<WavyDivider />
		<div style="display:flex; flex-direction:column; gap: 1.5rem; max-width: 30rem;margin: auto;">
			<div>
				<h2>Video</h2>
				<p style="font-size: 1.4rem; line-height: 1.8rem;">
					Filming + editing for events, interviews, promotional videos, weddings, music videos, and
					more.
				</p>
			</div>
			<div>
				<h2>Photo</h2>
				<p style="font-size: 1.4rem; line-height: 1.8rem;">
					Event coverage, portraits, and real estate photography.
				</p>
			</div>
			<div>
				<h2>Drone</h2>
				<p style="font-size: 1.4rem; line-height: 1.8rem;">
					Aerial photography and videography for events, real estate, and more.
				</p>
			</div>
			<div>
				<h2>Web</h2>
				<p style="font-size: 1.4rem; line-height: 1.8rem;">
					Simple, functional websites—designed and built from scratch.
				</p>
			</div>
		</div>
	</section>

	<!-- <section id="portfolio">
		<h1>Portfolio</h1>
		<hr />
		<div class="portfolio-content">
			<iframe
				class="landscape"
				src="https://www.youtube-nocookie.com/embed/VMK7k01P9Dc?si=cBA5xrZlsywVQK0T"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<iframe
				class="landscape"
				src="https://www.youtube.com/embed/cvpaMmWy62I?si=EQZp0o0vQdu16BKn"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<iframe
				class="landscape"
				src="https://www.youtube.com/embed/S5i9EJA9T9w?si=jEFNDNIRXVS8iwo_"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<iframe
				class="portrait"
				src="https://www.youtube.com/embed/7fsFR22xYRA?si=rguZZTjfRYfNlgtf"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<iframe
				class="portrait"
				src="https://www.youtube.com/embed/Ve3uSnPAUX8?si=5tckSgpxrhkV7M3o"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
		{#each categories as category}
			<section class="portfolio-category">
				<header>
					<h2>{category.category}</h2>
					<h3>{category.description}</h3>
				</header>

				<div class="portfolio-content">
					{#each category.images as image}
						<img src={image.url} alt="" loading="lazy" />
					{/each}
				</div>
			</section>
		{/each}
	</section> -->
</main>

<style lang="scss">
	.portfolio-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		flex-direction: column;
		gap: 1rem;

		iframe {
			border-radius: 2rem;
			border: var(--accent-color) solid 3px;
			box-shadow: 0px 0 50px 0px rgba(255, 130, 46, 0.2);
		}

		.landscape {
			grid-area: span 2 / span 2;
			aspect-ratio: 16 / 9;
			width: 100%;
		}

		.portrait {
			grid-area: span 2 / span 1;
			aspect-ratio: 9 / 16;
			width: 100%;
		}
	}

	.portfolio-category {
		header {
			margin: 5rem 1rem 1rem 1rem;
		}
		h2 {
			font-size: 2.2rem;
		}
		img {
			border-radius: 0.2rem;
			box-shadow: 0px 0 50px 0px rgba(255, 130, 46, 0.2);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		overflow: hidden;
	}

	#hero {
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(60vh);

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

	section#contact {
		p {
			font-size: 1.45rem;
			line-height: 2rem;
		}

		a {
			font-size: 2rem;
			font-weight: 800;
			text-decoration-thickness: 0.3rem;
		}
	}

	main > section {
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

		h2 {
			font-family: 'Caprasimo';
			font-style: normal;
			font-weight: 400;
			font-size: 1.8rem;
			line-height: 42px;
			text-align: center;
		}
		h3 {
			font-family: 'Aleo';
			font-style: normal;
			font-weight: 400;
			font-size: 1.4rem;
			line-height: 1.5rem;
			text-align: center;
		}

		hr {
			/* Line 1 */
			border: none;
			height: 0px;
			border-bottom: 3px solid #b85949;
			box-shadow: 0px 0px 100px rgba(255, 130, 46, 0.9);
			width: 100%;
			padding: 0 1rem;
			margin-bottom: 3rem;
		}

		p {
			font-family: 'Aleo', serif;
			text-align: center;
			font-size: 1.1rem;
			font-weight: 300;
		}
	}
</style>
