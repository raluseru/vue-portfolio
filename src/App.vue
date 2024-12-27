<script setup lang="ts">
import Rellax from 'rellax'
import NavMenu from './components/NavMenu.vue'
import Icon from './components/Icon.vue'
import WorkSamples from './components/WorkSamples.vue'
import UrbanDesign from './components/UrbanDesign.vue'
import About from './components/About.vue'
import { store } from './store'
import anime from 'animejs/lib/anime.es.js'
import { onMounted, ref } from 'vue'
const bgElement = ref(null)
const bgElement2 = ref(null)
function startMotion() {
    const el = bgElement.value
    anime({
        targets: el,
        translateX: function () {
            return anime.random(0, 470)
        },
        easing: 'easeInOutQuad',
        duration: 5750,
        complete: startMotion,
    })
}
function startMotion2() {
    const el = bgElement2.value
    anime({
        targets: el,
        translateX: function () {
            return anime.random(0, 170)
        },
        easing: 'easeInOutQuad',
        duration: 8750,
        complete: startMotion2,
    })
}

onMounted(() => {
    console.log('window matchmedia mounted', window.matchMedia('(prefers-color-scheme: dark)'))
    const isColorSchemeMediaDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isColorSchemeMediaDark) store.changeTheme(isColorSchemeMediaDark)
    setTimeout(() => {
        startMotion()
        startMotion2()
    }, 500)
    const rellax = new Rellax('.rellax')
})

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    console.log('window matchmedia', window.matchMedia('(prefers-color-scheme: dark)'))
    store.changeTheme(event.matches)
})
</script>

<template>
    <div class="wrapper relative">
        <div class="top-nav fixed justify-between left-0 top-0 flex w-full p-8">
            <header role="banner" class="flex">
                <a
                    href="https://raluseru.com/"
                    class="logo text-2xl text-slate-900 dark:text-white"
                >
                    <span>R</span>
                    <span class="text-slate-300">/</span>
                    <span>S</span></a
                >
            </header>
            <nav-menu></nav-menu>
        </div>
        <div
            class="fixed bg-element size-60 rounded-full blur-sm bg-gradient-to-r from-scooter-100 dark:from-casal-800"
            ref="bgElement"
        ></div>
        <div class="left-wrapper floating-elements">
            <!-- <div class="rectangle first-rectangle">
                <p>PORTFOLIO</p>
            </div> -->
            <div class="fixed rectangle second-rectangle rounded-full" ref="bgElement2"></div>
        </div>
        <div class="right-wrapper rellax">
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

        <p class="text-slate-900 dark:text-white">
            &copy; 2024 Design & Code Raluca-Mihaela Serdaru
        </p>
    </footer>
</template>

<style scoped>
main {
    padding-top: 100px;
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
    padding: 5px;
    min-width: 60px;
    min-height: 30px;
    span {
        margin-right: 7px;
        transition: all 0.3s;

        &:last-of-type {
            margin-right: 0;
        }
    }
    &:hover {
        .text-slate-300 {
            visibility: hidden;
            opacity: 0;
            margin-right: 0;
        }
        span:last-of-type {
            transform: translateX(-100%);
            display: inline-block;
        }
    }
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
