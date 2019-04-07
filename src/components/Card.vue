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
	grid-row-gap: 60px;
}

.card {
	height: auto;
}

.card-thumbnail {
	width: 100%;
	height: auto;
	padding-top: 100%;
	margin: 0 0 20px;
	background-color: #1A1A1A;
}
</style>

