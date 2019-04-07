<template>
<div class="content">
	<div class="hero">
		<h1>Developing brands and products for the digital world.</h1>
	</div>

	<div class="casestudies">
		<div class="casestudies-group">
			<Casestudy
				v-for="casestudy in casestudies"
				:key="casestudy.id"
				:title="casestudy.title"
				:category="casestudy.category"
				:thumbnail="casestudy.thumbnail"
				:path="casestudy.path"
			/>
		</div>
	</div>
</div>
</template>

<script>
import Casestudy from '@/components/Casestudy.vue'

export default {
	data() {
		return {
			casestudies: [
				{
					id: 1,
					title: 'Visuals by Impulse',
					category: 'Product design',
					thumbnail: 'vbi/thumbnail.png',
					path: '/visuals-by-impulse'
				},
				{
					id: 2,
					title: 'Canvascope',
					category: 'Brand identity, animation, product design',
					thumbnail: '',
					path: '/canvascope'
				},
				{
					id: 3,
					title: 'Elyumn',
					category: 'Brand identity, animation, product design',
					thumbnail: '',
					path: '/elyumn'
				},
				{
					id: 4,
					title: 'Stream Design Factory',
					category: 'Product design',
					thumbnail: '',
					path: '/stream-design-factory'
				},
				{
					id: 5,
					title: 'Concur App',
					category: 'Brand identity, animation',
					thumbnail: '',
					path: '/concur-app'
				}
			]
		}
	},
	
	components: {
		Casestudy
	}
}
</script>
