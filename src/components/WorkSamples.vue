<script setup lang="ts">
import anime from 'animejs/lib/anime.es.js'
import { computed, onMounted, ref } from 'vue'
const workArray = [
    {
        id: 'arhitext',
        link: 'https://arhitext.com/',
        img: {
            src: '/src/assets/logoarhitext.png',
            alt: 'Logo Arhitext',
        },
        imgPreview: {
            src: '/src/assets/previewArhitext.png',
            alt: 'Preview Arhitext',
        },
    },
    {
        id: 'cda',
        link: 'https://cdarezidential.ro/',
        img: {
            src: '/src/assets/cda.png',
            alt: 'Logo CDA Rezindetial',
        },
        imgPreview: {
            src: '/src/assets/cdaPreview.jpg',
            alt: 'Preview Cda',
        },
    },
    {
        id: 'ortodoxia',
        link: 'https://ortodoxiacatholica.com/',
        img: {
            src: '/src/assets/logoortodoxia.png',
            alt: 'Logo Ortodoxia Catholica',
        },
        imgPreview: {
            src: '/src/assets/previewOrtodoxia.png',
            alt: 'Preview Ortodoxia',
        },
    },
    {
        id: 'orthodox-church',
        link: 'https://orthodoxchurchliverpool.co.uk/',
        img: {
            src: '/src/assets/logoorthodoxchurch.png',
            alt: 'Logo Ortodox Church Liverpool',
        },
        imgPreview: {
            src: '/src/assets/previewOrthodox.png',
            alt: 'Preview Church',
        },
    },
    {
        id: 'become-orthodox',
        link: 'https://becomingorthodoxchristian.com/',
        img: {
            src: '/src/assets/becomeorthodox.png',
            alt: 'Logo Becoming Orthodox Christian',
        },
        imgPreview: {
            src: '/src/assets/previewBecoming.png',
            alt: 'Preview Becoming',
        },
    },
    {
        id: 'reper',
        link: 'https://rper.ro',
        img: {
            src: '/src/assets/logo-reper.png',
            alt: 'Logo Rper',
        },
        imgPreview: {
            src: '/src/assets/previewRper.png',
            alt: 'Preview Rper',
        },
    },
]

function onEnter(el: any, done: () => void) {
    if (el !== undefined && el.dataset !== undefined && el.dataset.index !== undefined) {
        anime({
            targets: el,
            opacity: 1,
            translateY: [0, 50],
            easing: 'easeOutElastic',
            duration: 1000,
            delay: el.dataset.index ? Number(el.dataset.index) * 100 : 100,
            direction: 'alternate',
            complete: done,
        })
    }
}
function onLeave(el: any, done: () => void) {
    anime({
        targets: 'el',
        opacity: [1, 0],
        translateY: 0,
        duration: 500,
        easing: 'easeOutElastic',
        direction: 'alternate',
        delay: el.dataset.index ? (5 - Number(el.dataset.index)) * 50 : 50,
        complete: done,
    })
}
const showWorks = ref(false)
const computedList = computed(() => {
    return showWorks.value ? workArray : []
})
onMounted(() => {
    setTimeout(() => {
        showWorks.value = true
    }, 500)
})
const constrainedHeights = ['orthodox-church', 'become-orthodox', 'reper']
const smallHeights = ['cda']
</script>

<template>
    <transition-group
        class="portfolio-list"
        tag="ul"
        :css="false"
        @enter="onEnter"
        @leave="onLeave"
    >
        <li v-for="(work, i) in computedList" :key="i" :data-index="i" ref="work">
            <a
                :href="work.link"
                :class="{
                    'constrain-height': constrainedHeights.includes(work.id),
                    'small-heights': smallHeights.includes(work.id),
                }"
                target="_blank"
            >
                <img :src="work.img.src" class="work-image" :alt="work.img.alt" />
            </a>
            <a :href="work.link" target="_blank">
                <img :src="work.imgPreview.src" class="work-image" :alt="work.imgPreview.alt" />
            </a>
        </li>
    </transition-group>
</template>
<style lang="scss">
ul.portfolio-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li {
        display: flex;
        justify-content: center;
        padding: 0 5px;

        min-height: 65px;

        a {
            width: 220px;
            display: inline-flex;
            align-self: center;
            margin: 0 auto;
        }
        a.constrain-height {
            align-content: center;
            align-items: center;
            justify-content: center;
            height: 67px;
        }
        a.small-heights {
            height: 55px;
        }

        img {
            max-width: 100%;
            height: 100%;
        }
        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
}
</style>
