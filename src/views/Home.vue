<template>
  <div class="content">
    <div class="hero">
      <h1>Developing brands and products for the digital world.</h1>
    </div>

    <div class="casestudies">
      <div class="casestudies-group">
        <Casestudy title="Visuals by Impulse" category="Product design"></Casestudy>
        <Casestudy title="Canvascope" category="Brand indentity, animation, product design"></Casestudy>
        <Casestudy title="Elyumn" category="Brand identity, animation, product design"></Casestudy>
        <Casestudy title="Stream Design Factory" category="product design"></Casestudy>
        <Casestudy title="Concur App" category="Brand identity"></Casestudy>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Casestudy from '@/components/Casestudy.vue'

export default {
  name: 'home',
  components: {
    Casestudy
  }
}
</script>
