
<template>
    <div id="loader" class="fade-out">
        <h1 class="fade-in">Loader</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
    name: 'Loader',
})
</script>

<style lang="scss" scoped>
#loader{
    background-color: $color-darkest;
    color: $color-accent;    
    padding: auto;
    margin: 0;
}
</style>