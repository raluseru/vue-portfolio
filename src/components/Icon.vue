<script setup lang="ts">
import { ref, onMounted } from 'vue'
import baseBath from '../assets/icons.svg'

defineProps({
    iconId: String,
    viewBox: String,
})

const computedBasePath = ref()

const getSvgFile = async (): Promise<string> => {
    try {
        const response = await fetch(baseBath)
        if (!response.ok) throw new Error('Network response was not ok')
        return baseBath // Return the path to the SVG
    } catch (e) {
        console.error(e) // Log the error
        throw 'There was an error getting the file'
    }
}
onMounted(async () => {
    computedBasePath.value = await getSvgFile()
})
</script>

<template>
    <svg v-if="computedBasePath">
        <use :href="`${computedBasePath}#${iconId}`" :viewBox="viewBox" />
    </svg>
</template>
<style lang="scss">
svg {
    width: 100%;
    height: auto;
}
</style>
