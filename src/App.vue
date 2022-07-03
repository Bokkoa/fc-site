<template>
  <div class="wrapper">
      <!-- <Loader /> -->
      <Background />
      <Navbar />
      <Home />
      <AuxiliarResources />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
// import Loader from '@/components/Loader.vue';
import  Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';
import Background from "./components/Background.vue";
import AuxiliarResources from "./components/AuxiliarResources.vue";

export default defineComponent({
  name: 'App',
  components:{
    // Loader    
    Navbar,
    Home,
    Background,
    AuxiliarResources
},
})
</script>


<style lang="scss" scoped>
.wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: $color-darkest;
    color: $color-secondary;
}
</style>
