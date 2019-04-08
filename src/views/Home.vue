<template>
<div class="content">
	<div class="hero">
		<h1>Developing brands and products for the digital world.</h1>
	</div>

	<div class="card-wrapper">
		<Card
			v-for="casestudy in casestudies"
			:key="casestudy.id"
			:title="casestudy.title"
			:category="casestudy.category"
			:thumbnail="casestudy.thumbnail"
			:path="casestudy.path"
		/>
	</div>
</div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	data() {
		return {
			casestudies: [
				{
					id: 1,
					title: 'Visuals by Impulse',
					category: 'Product design',
					thumbnail: require('./casestudies/visuals-by-impulse/thumbnail.jpg'),
					path: '/visuals-by-impulse'
				},
				{
					id: 2,
					title: 'Elyumn',
					category: 'Brand identity, animation',
					thumbnail: require('./casestudies/elyumn/thumbnail.jpg'),
					path: '/elyumn'
				},
				{
					id: 3,
					title: 'Concur App',
					category: 'Brand identity, animation',
					thumbnail: require('./casestudies/concur-app/thumbnail.jpg'),
					path: '/concur-app'
				},
				{
					id: 4,
					title: 'Stream Design Factory',
					category: 'Product design',
					thumbnail: require('./casestudies/stream-design-factory/thumbnail.jpg'),
					path: '/stream-design-factory'
				}
			]
		}
	},
	
	components: {
		Card
	}
}
</script>
