<script setup lang="ts">
import { store } from '../store'

</script>

<template>
    <nav aria-label="Main" role="navigation">
        <ul role="menu" class="menu-list">
            <li key="0" class="menu-item" role="menuitem" @click="store.changeActiveTab(0)">Projects</li>
            <li key="1" class="menu-item" role="menuitem" @click="store.changeActiveTab(2)">About</li>
        </ul>
    </nav>
</template>
<style lang="scss">
nav {
    padding: 30px 0;

  font-weight: 300;
  font-style: normal;
}
.menu-list {
    padding:0;
    margin:0;
    text-align: center;
    li{
        font-size: 18px;
        display: inline-block;
        min-width: 120px;
        border-left: 2px solid white;
        border-right: 2px solid white;
        cursor: pointer;
        text-align: center;
        padding: 0 5px;

        &:hover {
            border-color: #36827F;
        }
    }
}
</style>