<template>
    <section class="section projects__section">
        <div class="content projects__content">
            <h2 class="projects__title title__section">Projects</h2>
            <ProjectGrid />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ProjectGrid from "@/components/projects/ProjectGrid.vue";

export default defineComponent({
    name: 'Projects',
    components: {
      ProjectGrid
    }
})
</script>

<style lang="scss" scoped>
    // allows grid system
    .projects__content {
      width: 100%;
    }
</style>