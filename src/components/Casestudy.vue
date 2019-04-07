<template>
<router-link class="casestudy" :to="path">
	<div>
		<div class="casestudy-thumbnail" :style="{ backgroundImage: 'url(' + thumbnail + ')' }"/>
		<h2>{{ title }}</h2>
		<h3>{{ category }}</h3>
	</div>
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
