<script setup lang="ts">
import NavMenu from './components/NavMenu.vue'
import Icon from './components/Icon.vue'
import WorkSamples from './components/WorkSamples.vue'
import UrbanDesign from './components/UrbanDesign.vue'
import About from './components/About.vue'
import { store } from './store'
</script>

<template>
    <div class="wrapper">
        <div class="left-wrapper floating-elements">
            <div class="rectangle first-rectangle">
                <p>PORTFOLIO</p>
            </div>
            <div class="rectangle second-rectangle"></div>
        </div>
        <div class="right-wrapper">
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
        </div>
    </div>

    <footer role="contentinfo">
        <div class="social-wrapper">
            <a href="https://wa.me/447586485912">
                <Icon icon-id="whatsapp" view-box="0 0 16 16"></Icon>
            </a>
            <a href="https://github.com/raluseru">
                <Icon icon-id="github" view-box="0 0 16 16"></Icon>
            </a>
        </div>

        <p>&copy; 2024 Design & Code Raluca-Mihaela Serdaru</p>
    </footer>
</template>

<style scoped>
main {
    min-height: 375px;
    p {
        max-width: 500px;
    }
}
.wrapper {
    display: flex;
    flex-direction: column-reverse;
}

.floating-elements {
    /* position: absolute;
    bottom: 10%;
    z-index: -1; */
    position: relative;
}
.rectangle {
    width: 160px;
    height: 160px;
}
.first-rectangle {
    background-color: #4ecac2;
    p {
        writing-mode: vertical-rl;
        text-orientation: upright;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding-left: 20px;
    }
}
.second-rectangle {
    background: 2px 2px/10px 10px transparent radial-gradient(#d7e0ea 18.75%, transparent 0);
    position: absolute;
    top: 30%;
    left: 20%;
}
.bg-style {
    display: none;
}
@media only screen and (min-width: 768px) {
    .left-wrapper {
        flex-basis: 440px;
        display: flex;
        align-items: center;
        p {
            font-size: 21px;
        }
    }
    .right-wrapper {
        flex-basis: 700px;
        min-width: 700px;
    }
    .wrapper {
        flex-direction: row;
        min-width: 720px;
        margin: 0 auto;
        justify-content: center;
    }
    .rectangle {
        width: 220px;
        height: 220px;
    }
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
    .second-rectangle {
        margin-top: 25%;
    }
    main {
        p {
            max-width: 500px;
        }
    }
}

header {
    max-height: 60px;
    /* position: fixed; */
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
.social-wrapper {
    text-align: center;
    margin: 0 auto;
    svg {
        width: 32px;
        height: 32px;
    }
    a {
        &:hover {
            svg {
                fill: #b24c63;
            }
        }
        &:focus {
            outline: 2px solid #b24c63;
        }
    }
}
</style>
