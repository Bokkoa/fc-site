<template>
    <section class="section experience__section">
        <div class="content experience__content">
            <h2 class="experience__title title__section">Experience Section</h2>
            <JobList />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import JobList from '@/components/experience/JobsList.vue'

export default defineComponent({
    name: 'Experience',
    components:{
        JobList
    }
})
</script>

<style lang="scss" scoped>
</style>