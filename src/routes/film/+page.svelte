<script lang="ts">
	import FilmBorderImage from '$lib/components/FilmBorderImage.svelte';
	import { onMount } from 'svelte';

	function random(a: number) {
		return function () {
			let t = (a += 0x6d2b79f5);
			t = Math.imul(t ^ (t >>> 15), t | 1);
			t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
			return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
		};
	}

	let mouseX = 0;
	let mouseY = 0;

	// Update mouse position on mousemove
	function handleMouseMove(event: MouseEvent) {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		// Calculate mouse position relative to the center
		mouseX = event.clientX;
		mouseY = event.clientY;

		// Update CSS variables
		document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
		document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
	}

	onMount(() => {
		document.querySelectorAll('.strip').forEach((strip, index) => {
			const rotation = index % 2 == 0 ? random(index)() * -6 - 1 : random(index)() * 6; // Random rotation between -1 and -5 degrees
			const scale = random(index)() * 0.4 + 1; // Random scale between 0.8 and 1.0
			const xOffset = index % 2 == 0 ? random(index)() * -10 : random(index)() * 10; // Random x offset between -10 and 10
			const marginBottom = random(index)() * 50 + 10; // Random margin bottom between 10 and 30
			(strip as HTMLElement).style.transform =
				`rotate(${rotation}deg) scale(${scale}) translateX(${xOffset}px)`;
			(strip as HTMLElement).style.marginBottom = `${marginBottom}px`;
		});
	});
</script>

<h1>Film Photogrpahy</h1>

<div
	class="container"
	on:mousemove={handleMouseMove}
	role="application"
	aria-roledescription="container"
>
	<div class="strip strip1">
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
	</div>

	<div class="strip strip2">
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
	</div>

	<div class="strip strip2">
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
	</div>

	<div class="strip strip2">
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
		<FilmBorderImage href="/film.jpg" />
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 80px;
		margin-top: 20px;
		justify-items: center; /* Centers strips horizontally */
		counter-reset: line-number;
		max-width: 1000px;
		margin: 20px auto;
	}

	.strip {
		counter-increment: line-number;

		display: flex;
		width: 80%;
		transform: scale(0.5);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
		transition: all 0.1s ease;
		align-self: center;
	}

	.strip:nth-child(odd) {
		align-self: start;
	}

	.strip:hover {
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
		transform: translate(calc(var(--mouse-x) / 50), calc(var(--mouse-y) / 50));
		z-index: 999;
	}
</style>
