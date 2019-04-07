<template>
	<div class="casestudy">
		<div class="casestudy-thumbnail">
			<slot/>
		</div>
		<h2>{{ title }}</h2>
		<h3>{{ category }}</h3>
	</div>
</template>

<script>
export default {
	props: [
		"title",
		"category"
	]
}
</script>
