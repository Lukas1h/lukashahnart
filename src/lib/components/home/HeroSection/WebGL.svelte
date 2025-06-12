<script>
	// @ts-nocheck

	import { onMount } from 'svelte';

	function createShader(gl, type, source) {
		const shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			return null;
		}
		return shader;
	}

	function createProgram(gl, vsSource, fsSource) {
		const vShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
		const fShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
		const program = gl.createProgram();
		gl.attachShader(program, vShader);
		gl.attachShader(program, fShader);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error(gl.getProgramInfoLog(program));
			return null;
		}
		return program;
	}

	function main() {
		const canvas = document.querySelector('#gl-canvas');
		const gl = canvas.getContext('webgl', { antialias: true });

		if (!gl) {
			alert('Unable to initialize WebGL.');
			return;
		}

		// Vertex shader program
		const vsSource = `
			attribute vec2 a_position;
			attribute vec2 a_texCoord;
			varying vec2 v_texCoord;
			void main() {
				gl_Position = vec4(a_position, 0.0, 1.0);
				v_texCoord = a_texCoord;
			}
		`;

		// Fragment shader program (wavy effect)
		const fsSource = `
			precision mediump float;
			varying vec2 v_texCoord;
			uniform sampler2D u_image;
			uniform float u_time;

			void main() {
				vec2 uv = v_texCoord;
				uv.y += 0.01 * sin(uv.x * 10.0 + u_time * -3.0);
                uv.x += 0.002 * sin(uv.y * 30.0 + u_time * -4.0);
				gl_FragColor = texture2D(u_image, uv);
			}
		`;

		const program = createProgram(gl, vsSource, fsSource);
		gl.useProgram(program);

		const uTime = gl.getUniformLocation(program, 'u_time');
		let start = performance.now();

		// Fullscreen quad (2 triangles)
		const positions = new Float32Array([
			-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1
		]);

		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

		const aPosition = gl.getAttribLocation(program, 'a_position');
		const aTexCoord = gl.getAttribLocation(program, 'a_texCoord');

		gl.enableVertexAttribArray(aPosition);
		gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 16, 0);

		gl.enableVertexAttribArray(aTexCoord);
		gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 16, 8);

		// Load image as texture
		const image = new Image();
		image.src = '/lukashahnart.png';
		image.onload = () => {
			const texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
			gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
			gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

			// Setup texture parameters
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

			gl.clearColor(0, 0, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT);

			function render() {
				const now = performance.now();
				const time = (now - start) / 1000;
				gl.uniform1f(uTime, time);

				gl.clear(gl.COLOR_BUFFER_BIT);
				gl.drawArrays(gl.TRIANGLES, 0, 6);
				requestAnimationFrame(render);
			}

			requestAnimationFrame(render);
		};
	}

	onMount(main);
</script>

<canvas id="gl-canvas" width="1080" height="540"></canvas>

<style>
	#gl-canvas {
		width: 100%;
		max-width: 500px;
	}
</style>
