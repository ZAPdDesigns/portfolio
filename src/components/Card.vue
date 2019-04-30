<template>
<router-link class="card" :to="path">
	<div class="card-thumbnail" :style="{'background-image': 'url(' + thumbnail + ')'}"/>
	<h2>{{ title }}</h2>
	<h3>{{ category }}</h3>
</router-link>
</template>

<script>
export default {
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

.card-thumbnail {
	width: 100%;
	height: auto;
	padding-top: 100%;
	margin: 0 0 20px;
	background-color: #1A1A1A;
	transform: scale(1);
	transition: transform .25s ease-in-out;
}

@media only screen and (min-width: 640px) {
	.card:hover > .card-thumbnail {
		transform: scale(1.015);
	}
}
</style>

