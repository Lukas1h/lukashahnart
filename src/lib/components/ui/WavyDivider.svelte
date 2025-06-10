<script lang="ts">
	export let direction: 'left' | 'right' = 'right';
</script>

<div class="divider">
	<div
		class="line"
		class:wave-left={direction === 'left'}
		class:wave-right={direction === 'right'}
	></div>
</div>

<style lang="scss">
	@keyframes wave-left {
		0% {
			background-position: -75px;
		}
		100% {
			background-position: 0;
		}
	}

	@keyframes wave-right {
		0% {
			background-position: 75px;
		}
		100% {
			background-position: 0;
		}
	}

	.divider {
		width: 100%;
		overflow: hidden;
		margin-bottom: 2rem;
		.line {
			position: relative;
			background-image: url('/wavy-line.svg');
			background-repeat: repeat-x;
			background-size: auto 100%; // changed from cover
			background-position-y: center; // ensure vertical alignment
			width: 100%;
			height: 10px;
			padding: 0 1rem;
			margin-top: 1rem;
			animation-duration: 1s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
		}
		.line.wave-left {
			animation-name: wave-left;
		}
		.line.wave-right {
			animation-name: wave-right;
		}
	}
</style>
