<div class="divider">
	<div class="line"></div>
</div>

<style lang="scss">
	@keyframes wave {
		0% {
			background-position: -75px;
		}
		100% {
			background-position: 0;
		}
	}

	.divider {
		width: 100%;
		overflow: hidden;
		margin-bottom: 4rem;
		.line {
			position: relative;
			animation: wave 0.6s linear infinite;
			background-image: url('/wavy-line.svg');
			background-repeat: repeat-x;
			background-size: cover;
			width: 100%;
			height: 10px;

			// filter: drop-shadow(0px 0px 100px rgba(255, 130, 46, 0.9));
			// background-color: red;
			padding: 0 1rem;
			margin-top: 1rem;
		}
	}
</style>
