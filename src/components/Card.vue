<template>
<router-link class="card" :to="path">
	<div @mousemove="tilt" @mouseleave="noTilt" :style="tiltOrientation">
		<div class="card-thumbnail" :style="{'background-image': 'url(' + thumbnail + ')'}"/>
		<h2 class="card-title">{{ title }}</h2>
		<h3>{{ category }}</h3>
	</div>
</router-link>
</template>

<script>
export default {
	data() {
		return {
			tiltOrientation: ''
		}
	},

	methods: {
		tilt(e)
		{
			const range = 20;
			const xMidpoint = e.target.offsetWidth / 2;
			const yMidpoint = e.target.offsetHeight / 2;
			const x = e.offsetX;
			const y = e.offsetY;
			const xDisplace = range * -((x - xMidpoint) / e.target.offsetWidth);
			const yDisplace = range * ((y - yMidpoint) / e.target.offsetHeight);

			this.tiltOrientation = 'transform: perspective(5000px) rotateX(' + yDisplace + 'deg) rotateY(' + xDisplace + 'deg) scale3d(1.01,1.01,1.01)';
			// console.log(range * ((x - xMidpoint) / e.target.offsetWidth))
			// console.log(range * ((y - yMidpoint) / e.target.offsetHeight))
			// console.log(e)
		},

		noTilt() {
			this.tiltOrientation = 'transform: perspective(5000px);';
		}
	},

	props: [
		"title",
		"category",
		"thumbnail",
		"path",
	]
}
</script>

<style>
.card-wrapper {
	width: 100%;
	height: auto;
	margin: 60px 0 80px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 40px;
}

.card {
	height: auto;
	margin: 0 0 60px;
}
.card > div {
	will-change: transform;
	transition: transform 3s cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
}

.card-thumbnail {
	width: 100%;
	height: auto;
	padding-top: 100%;
	margin: 0 0 20px;
	background-color: #1A1A1A;
	transform: scale(1);
	transition: transform .25s ease-in-out;
}

.card-title {
	 margin: 0 0 4px;
 }
</style>

