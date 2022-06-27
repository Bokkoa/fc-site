<template>
    <div class="home__content">
        <Main />
        <About />
        <Experiencie />
        <Projects />
        <Contact />
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import Projects from '@/sections/Projects.vue'
import About from '@/sections/About.vue'
import Experiencie from '@/sections/Experiencie.vue'
import Main from '@/sections/Main.vue';
import Contact from '@/sections/Contact.vue'

export default defineComponent({
    name: "Home",
    components: { About, Experiencie, Projects, Main, Contact }
})
</script>

<style lang="scss" scoped>
.home__content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>