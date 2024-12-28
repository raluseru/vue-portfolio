<script setup lang="ts"></script>

<template>
    <p class="text-dark dark:text-white">
        My passion lies in crafting software products with valuable and accessible user experiences.
        This started as a hobby, which became after a while a full-time job. I started to create
        websites using WordPress, and later on I became a WordPress developer helping as well at
        creation of
        <a href="https://zionbuilder.io/" class="text-casal-950 dark:text-scooter-300"
            >Zion Builder visual page builder</a
        >.
    </p>
    <p class="text-dark dark:text-white">
        My Javascript/ TypeScript experience is mostly in Vue.js framework or vanilla TypeScript,
        but I like to experience other technologies as well. My belief is that coding is mostly
        about the algorithm you choose and the way you can apply certain programming principles -
        It's not only about a type of framework. I like to write comprehensive code, which is easy
        to be understood by others.
    </p>
    <p class="text-dark dark:text-white">
        In my spare time I like "to play with pencils". My educational and previous professional
        background is in architectural and urban studies which helped me in approaching all types of
        projects from a multidisciplinary point of view.
    </p>
</template>
<style lang="scss" scoped>
p {
    font-size: 18px;
}
a {
    text-decoration: none;
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        background-color: theme('colors.scooter.300');
        top: 100%;
        left: 0;
        transition: all 0.2s ease-in-out;
    }
    &:hover:after {
        width: 100%;
    }
}
@media (prefers-color-scheme: light) {
    .a {
        &:after {
            background: theme('colors.casal.950');
        }
    }
}
</style>
