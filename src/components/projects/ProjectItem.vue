<template>
  <div class="projects__details" @click="selectProject">
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
        <figure class="gray-effect">
          <img class="projects__image" :src="getImgUrl(project.image)" alt="">
        </figure>
      </div>
      <div class="projects__stack">
        <div class="projects__tool" v-for="tool, index in project.tools" :key="index">
          * {{tool}}
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { getImgUrl } from '@/helpers/imageHelper';
import { IProject } from '../../data/projects';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProjectItem',
  props: {
    project: {
      type: Object as PropType<IProject>,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    return {
      getImgUrl,
      selectProject: () => store.commit('selectProject', props.project.id)
    }
  },
})
</script>


<style lang="scss" scoped>
.projects__ {

  &details{
      min-height: 25em;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: flex;
      @include smart-screen {
        min-height: 70vh;
      }

      @include big-mobile {
        min-height: 25em;
      }
    }

    &image {
      display: flex;
      border-radius: 10px;
      margin: 0;
      max-width: 14vw;

      @include smart-screen {
        min-width: 22vw;
      }

      @include big-mobile {
        max-width: 100%;
        margin: 0;
      }
    }

    &stack{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      border-top: 1px solid $color-accent;
    }

    &tool{
      display: flex;
      flex-direction: row;
      padding: .5em;
      flex-wrap: wrap;
    }
}
</style>