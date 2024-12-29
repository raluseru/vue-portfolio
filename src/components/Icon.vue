<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getSvgSprite } from '../svgService'

defineProps({
    iconId: String,
    viewBox: String,
})

const svgContent = ref<string>('')

onMounted(async () => {
    svgContent.value = await getSvgSprite()
})
</script>

<template>
    <svg v-if="svgContent">
        <use
            :href="`data:image/svg+xml,${encodeURIComponent(svgContent)}#${iconId}`"
            :viewBox="viewBox"
        />
    </svg>
</template>
<style lang="scss">
svg {
    width: 100%;
    height: auto;
}
</style>
