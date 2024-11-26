<script setup lang="ts">
import NavMenu from './components/NavMenu.vue';
import Icon from './components/Icon.vue';
import WorkSamples from './components/WorkSamples.vue';
import UrbanDesign from './components/UrbanDesign.vue';
import { store } from './store'
</script>

<template>
  <div class="top-nav"> 
    <!-- <Icon icon-id="palette" viewBox="0 0 100 100"></Icon> -->
  </div>

  <header role="banner">
    <img src="/src/assets/logo-raluca.png" class="logo" alt="Logo Raluca">
  </header>
  <nav-menu></nav-menu>
  <main role="main">
    <WorkSamples v-if="store.activeTabIndex===0"/>
    <UrbanDesign v-if="store.activeTabIndex===1"/>

  </main>
  <footer role="contentinfo">
  <p>&copy; 2024 Design & Code Raluca-Mihaela Serdaru</p>
</footer>
</template>

<style scoped>
header{
  max-height: 60px;
}
.top-nav{
  max-height: 60px;
  svg {
    height: 100%;
  }
}
.logo {
  display: block;
height: 100%;
width: 160px;
object-fit: contain;
  margin: 0 auto;
}

@media (min-width: 1024px) {
}

footer {
  p {
    text-align: center;
  }
}
</style>
