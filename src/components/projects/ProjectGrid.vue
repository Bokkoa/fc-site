<template>
  <section class="projects__deck">
    <article class="projects__card" v-for="(item, index) in projects" :key="index">
      <ProjectItem  :project="item" />
    </article>
  </section>
</template>

<script lang="ts">
import { IProject } from '@/data/projects';
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import ProjectItem from './ProjectItem.vue'

export default defineComponent({
  name: 'ProjectGrid',
  components: {
    ProjectItem
  },
  setup() {
    const store = useStore();
    const projects = ref<IProject[]>(store.state.projects)
    return {
      projects
    }
  },
})
</script>

<style lang="scss" scoped>
  .projects__ {
    &deck {
      clear: both;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
      column-gap: 1em;
      row-gap: 10vh;
      width: 100%;

      @include medium-pc {
        grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
        column-gap: 0;
      }

      @include smart-screen {
        grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
      }

      @include big-mobile {
        grid-template-columns: repeat(auto-fill, minmax(90vw, 1fr));
      }
    }

    &card {
      margin: 1em;
     
      &:hover{
          transform: translate3D(0,-1px,0) scale(1.03);
          box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04);
          transition: all .4s ease; /* zoom in */
          cursor: pointer;
      }

      @include smart-screen {
        min-width: 40vw;
        min-height: 70vh;
        justify-content: center;
      }

      // @include big-mobile {
      //   max-width: 90vw;
      //   margin: 0;
      // }
    }
  }
</style>
