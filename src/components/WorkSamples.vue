<script setup lang="ts">
 import anime from 'animejs/lib/anime.es.js'
 const workArray= [
        {
            id:"arhitext",
            link: "https://arhitext.com/",
            img: {
                src: "/src/assets/logo arhitext.png",
                alt: "Logo Arhitext"
            }
        },
        {
            id:"cda",
            link: "https://cdarezidential.ro/",
            img: {
                src: "/src/assets/cda.png",
                alt: "Logo CDA Rezindetial"
            }
        },
        {
            id:"ortodoxia",
            link: "https://ortodoxiacatholica.com/",
            img: {
                src: "/src/assets/logo-ortodoxia.png",
                alt: "Logo Ortodoxia Catholica"
            }
        },
        {
            id:"orthodox-church",
            link: "https://orthodoxchurchliverpool.co.uk/",
            img: {
                src: "/src/assets/logo-orthodox-church.png",
                alt: "Logo Ortodox Church Liverpool"
            }
        },
        {
            id:"become-orthodox",
            link: "https://becomingorthodoxchristian.com/",
            img: {
                src: "/src/assets/becomeorthodox.png",
                alt: "Logo Becoming Orthodox Christian"
            }
        }
    ]
    function  onEnter(el:any, done:()=>void) {
        if (el!==undefined && el.dataset!==undefined && el.dataset.index!==undefined) {

            anime({
            targets: 'el',
          opacity: [0, 1],
                        translateY: [300, 0],
          easing: 'easeOutElastic',
          delay: el.dataset.index ? Number(el.dataset.index) * 100: 100,
          direction: 'alternate',
          loop: true,
          complete: done
        })
        }
        }
function  onLeave(el:any, done:()=>void) {
    anime({
    targets: 'el',
    opacity: [1, 0],
                translateY: [0, 300],

  easing: 'easeOutElastic',
  direction: 'alternate',
  loop: true,
  delay: el.dataset.index ? (5 - Number(el.dataset.index)) * 50 : 50,
  complete: done
})
}
</script>

<template>
    <ul class="portfolio-list">
        <transition-group :css="false" @enter="onEnter" @leave="onLeave">
            <li v-for="(work,i) in workArray" :key="i" :data-index="workArray.length - 1">
                <a :href="work.link" >
                    <img :src="work.img.src" class="work-image" :alt="work.img.alt" :class="{'vertical-align': work.id==='ortodoxia'}">
                </a>
            </li>
        </transition-group>
        
</ul>
</template>
<style lang="scss">
ul.portfolio-list {
    padding:0;
    margin:0;
    list-style-type: none;
    li{
        width: 220px;
        border-left: 2px solid white;
        border-right: 2px solid white;
        cursor: pointer;
        text-align: center;
        padding: 0 5px;
        margin: 0 auto;
        min-height: 65px;
        vertical-align: middle;
        &:hover {
            border-color: #B24C63;
        }
        img {
            max-width: 100%;
        }
    }
}
</style>