<template>
  <div class="content">
    <div class="hero">
      <h1>Developing brands and products for the digital world.</h1>
    </div>

    <div class="casestudies">
      <div class="casestudies-group">
        <Casestudy></Casestudy>
        <Casestudy></Casestudy>
        <Casestudy></Casestudy>
        <Casestudy></Casestudy>
        <Casestudy></Casestudy>
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
