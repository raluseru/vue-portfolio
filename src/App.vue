<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
import Icon from './components/Icon.vue'
import WorkSamples from './components/WorkSamples.vue'
import UrbanDesign from './components/UrbanDesign.vue'
import About from './components/About.vue'
import { store } from './store'
</script>

<template>
    <div class="top-nav">
        <!-- <Icon icon-id="palette" viewBox="0 0 100 100"></Icon> -->
    </div>

    <header role="banner">
        <img src="/src/assets/logoraluca.png" class="logo" alt="Logo Raluca" />
    </header>
    <nav-menu></nav-menu>
    <main role="main">
        <WorkSamples v-if="store.activeTabIndex === 0" />
        <UrbanDesign v-if="store.activeTabIndex === 1" />
        <About v-if="store.activeTabIndex === 2"></About>
    </main>
    <div class="bg-style">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            viewBox="0 0 800 400"
        >
            <path
                d="M12.55604362487793,9.865460395812988C12.55604362487793,9.865460395812988,788.3407592773438,8.071739196777344,788.3407592773438,8.071739196777344C788.3407592773438,8.071739196777344,789.2376098632812,388.3407897949219,789.2376098632812,388.3407897949219C789.2376098632812,388.3407897949219,8.968599319458008,384.7533264160156,8.968599319458008,384.7533264160156C8.968599319458008,384.7533264160156,11.65918254852295,9.865460395812988,11.65918254852295,9.865460395812988"
                fill="none"
                stroke-width="1"
                stroke='url("#SvgjsLinearGradient1000")'
                stroke-linecap="round"
                stroke-dasharray="0 2"
            ></path>
            <defs>
                <linearGradient id="SvgjsLinearGradient1000">
                    <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
                    <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
                </linearGradient>
            </defs>
        </svg>
    </div>
    <footer role="contentinfo">
        <p>&copy; 2024 Design & Code Raluca-Mihaela Serdaru</p>
    </footer>
</template>

<style scoped>
.bg-style {
    display: none;
}
@media only screen and (min-width: 768px) {
    .bg-style {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .logo {
        border: 2px dotted #a1e44d;
    }
}

header {
    max-height: 60px;
    position: fixed;
    z-index: 9;
    top: 6px;
    left: 0;
    right: 0;
}
.top-nav {
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
    margin: 0 auto;
}

footer {
    p {
        text-align: center;
    }
}
</style>
