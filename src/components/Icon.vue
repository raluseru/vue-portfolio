<script setup lang="ts">
import { ref, onMounted } from 'vue'
import baseBath from 'https://raluseru.com/src/assets/icons.svg'

defineProps({
    iconId: String,
    viewBox: String,
})

const computedBasePath = ref()

const getSvgFile = async (req, res): Promise<string> => {
    try {
        const response = await fetch(baseBath)
        if (!response.ok) throw new Error('Network response was not ok')
        const svgContent = await response.text()
        // Set the appropriate headers for the response
        res.setHeader('Content-Type', 'image/svg+xml')
        res.setHeader('Cache-Control', 'public, max-age=31536000') // Optional: Add caching headers

        // Send the SVG content back to the client
        res.send(svgContent)
        return svgContent // Return the path to the SVG
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
