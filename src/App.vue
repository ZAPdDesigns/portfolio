<template>
  <div id="app" class="app">
    <div class="header">
      <router-link to="/"><img src="@/assets/logo.svg" alt="W" class="logo"></router-link>
      <div class="nav">
        <router-link to="/" class="nav-item">Work</router-link>
        <router-link to="/about" class="nav-item">About</router-link>
        <a href="mailto:hi@designbywillj.com" target="_blank" class="nav-item">Email</a>
      </div>
    </div>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <div class="footer">
      <div class="socials">
        <a href="https://facebook.com/designbywillj" target="_blank"><h3>Facebook.</h3></a>
        <a href="https://instagram.com/designbywillj" target="_blank"><h3>Instagram.</h3></a>
        <a href="https://twitter.com/designbywillj" target="_blank"><h3>Twitter.</h3></a>
      </div>
      <h3>Will Johnson &#169; 2019</h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted()
  {
    window.onload = () =>
    {
      const splash = document.getElementById('splash');
      splash.className = 'splash';
      setTimeout(
        () => splash.remove(),
        500 // this is the length of your transition
      );
    }
  }
}
</script>


<style>
@import url('./css/font.css');
@import url('./css/reset.css');
@import url('./css/header.css');
@import url('./css/footer.css');
@import url('./css/about.css');
@import url('./css/casestudy.css');

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
