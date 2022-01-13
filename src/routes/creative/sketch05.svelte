<!-- Code copied gratefully from Matt DesLaurier's excellent Svelte REPL at
https://svelte.dev/repl/5ab538b7182941f789908a660e9bd25c?version=3.12.1

Leaving his example as the first sketch here in honor of his work and amazing contributions -->
<script>
	export let hidePanel = false;
	import CanvasSketchEditor from '$components/CanvasSketchEditor.svelte';
	import Slider from '$components/Slider.svelte';
	import ColorInput from '$components/ColorInput.svelte';
	import Checkbox from '$components/Checkbox.svelte';
	import { onMount } from 'svelte';
	const data = {
		TITLE: 'Sketch05',
		outline: true,
		arclen: 0.5,
		angle: 0,
		radius: 0.33,
		background: '#527A9B',
		foreground: '#F4B9A7',
		lineWidth: 20
	};

	const settings = {
		scaleToView: true,
		dimensions: [1280, 1280]
	};
	let c, ctx, w, h;
	onMount(() => {
		c = document.getElementById('c');
		w = c.width = window.innerWidth;
		(h = c.height = window.innerHeight), (ctx = c.getContext('2d'));
		init();
		anim();

		window.addEventListener('resize', function () {
			w = c.width = window.innerWidth;
			h = c.height = window.innerHeight;
			starter.x = w / 2;
			starter.y = h / 2;

			init();
		});
	});
	let minDist = 10,
		maxDist = 30,
		initialWidth = 10,
		maxLines = 100,
		initialLines = 4,
		speed = 5,
		lines = [],
		frame = 0,
		timeSinceLast = 0,
		oldDirs = [
			// straight x, y velocity
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
			// diagonals, 0.7 = sin(PI/4) = cos(PI/4)
			[0.7, 0.7],
			[0.7, -0.7],
			[-0.7, 0.7],
			[-0.7, -0.7]
		],
		dirs = [
			[1, 0],
			[0.5, 0.866],
			[-0.5, 0.866],
			[1, 0],
			[-0.5, -0.866],
			[0.5, -0.866]
		],
	starter = {
		// starting parent line, just a pseudo line

		x: w / 2,
		y: h / 2,
		vx: 0,
		vy: 0,
		width: initialWidth
	};

	function init() {
		lines.length = 0;

		for (var i = 0; i < initialLines; ++i) lines.push(new Line(starter));

		ctx.fillStyle = '#222';
		ctx.fillRect(0, 0, w, h);

		// if you want a cookie ;)
		// ctx.lineCap = 'round';
	}
	function getColor(x) {
		return 'hsl( hue, 80%, 50% )'.replace('hue', (x / w) * 360 + frame);
	}
	function anim() {
		window.requestAnimationFrame(anim);

		++frame;

		ctx.shadowBlur = 0;
		ctx.fillStyle = 'rgba(0,0,0,.02)';
		ctx.fillRect(0, 0, w, h);
		ctx.shadowBlur = 0.5;

		for (var i = 0; i < lines.length; ++i)
			if (lines[i].step()) {
				// if true it's dead

				lines.splice(i, 1);
				--i;
			}

		// spawn new

		++timeSinceLast;

		if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < 0.5) {
			timeSinceLast = 0;

			lines.push(new Line(starter));

			// cover the middle;
			ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
			ctx.beginPath();
			ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function Line(parent) {
		this.x = parent.x | 0;
		this.y = parent.y | 0;
		this.width = parent.width / 1.25;

		do {
			var dir = dirs[(Math.random() * dirs.length) | 0];
			this.vx = dir[0];
			this.vy = dir[1];
		} while (
			(this.vx === -parent.vx && this.vy === -parent.vy) ||
			(this.vx === parent.vx && this.vy === parent.vy)
		);

		this.vx *= speed;
		this.vy *= speed;

		this.dist = Math.random() * (maxDist - minDist) + minDist;
	}
	Line.prototype.step = function () {
		var dead = false;

		var prevX = this.x,
			prevY = this.y;

		this.x += this.vx;
		this.y += this.vy;

		--this.dist;

		// kill if out of screen
		if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) dead = true;

		// make children :D
		if (this.dist <= 0 && this.width > 1) {
			// keep yo self, sometimes
			this.dist = Math.random() * (maxDist - minDist) + minDist;

			// add 2 children
			if (lines.length < maxLines) lines.push(new Line(this));
			if (lines.length < maxLines && Math.random() < 0.5) lines.push(new Line(this));

			// kill the poor thing
			if (Math.random() < 0.2) dead = true;
		}

		ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
		ctx.beginPath();
		ctx.lineWidth = this.width;
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(prevX, prevY);
		ctx.stroke();

		if (dead) return true;
	};

	const sketch = ({}) => {
		return ({ context, width, height }) => {
			const { background, foreground, radius, arclen, angle, lineWidth, outline, stroke } = data;
			context.clearRect(0, 0, width, height);
			context.fillStyle = background;
			context.fillRect(0, 0, width, height);

			const minDim = Math.min(width, height);
			context.beginPath();
			context.arc(width / 2, height / 2, minDim * radius, angle, Math.PI * 2 * arclen + angle);
			context.fillStyle = foreground;
			context.strokeStyle = foreground;
			context.lineWidth = lineWidth;
			if (outline) context.stroke();
			else context.fill();
		};
	};
</script>

<canvas id="c" />

<!-- <CanvasSketchEditor {sketch} {settings} {data} {hidePanel}>
	<ColorInput label='Background' bind:value={data.background} />
	<ColorInput label='Foreground' bind:value={data.foreground} />
	<Slider label='Arc Length' bind:value={data.arclen} />
	<Slider label='Radius' bind:value={data.radius} />
	<Slider label='Angle' bind:value={data.angle} min={-Math.PI} max={Math.PI} />
	<Checkbox label='Outline' bind:checked={data.outline} />
	{#if data.outline}
		<Slider label='Line Width' bind:value={data.lineWidth} min=1 max=100 />
	{/if}
</CanvasSketchEditor> -->
