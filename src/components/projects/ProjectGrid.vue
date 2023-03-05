<template>
  <section class="projects__deck">
    <article class="projects__card" v-for="item in projects" :key="item.id">
      <div class="projects__details">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <figure>
          <img :src="item.image" alt="">
        </figure>
      </div>
      <div class="projects__stack">
        <div class="projects__tool" v-for="tool, index in item.tools" :key="index">
          * {{tool}}
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProjectGrid',
  setup() {
    const store = useStore();
    const projects = ref(store.state.projects)

    const getImgUrl = (imagePath: string) => {
      // const imgPath = new URL(`../../assets/${imagePath}`, import.meta.url).href
      // return imagePath
      return require(`../../assets/${imagePath}`)
    }
    return {
      projects,
      getImgUrl
    }
  },
})
</script>

<style lang="scss" scoped>
  .projects__ {
    &deck {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &card {
      max-width: 15vw;
      margin: 1em;
      display: flex;
      flex-direction: column;
     
      &:hover{
          transform: translate3D(0,-1px,0) scale(1.03);
          box-shadow: 8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04);
          transition: all .4s ease; /* zoom in */
          cursor: pointer;

          /* Gray effect */
          figure {
            -webkit-filter: grayscale(100%) blur(3px);
            filter: grayscale(100%) blur(3px);
          }
      }

      @include big-mobile {
        max-width: 90vw;
        margin: 0;
      }
    }

    &details{
      min-height: 25em;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: flex;

      img {
        display: flex;
        border-radius: 10px;
        margin: 0;
        max-width: 14vw;

        @include big-mobile {
          max-width: 100%;
          margin: 0;
        }
      }
    }

    &stack{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      // color: $color-darkest;
      border-top: 1px solid $color-accent;
      // background-color: $color-secondary;
    }

    &tool{
      display: flex;
      flex-direction: row;
      padding: .5em;
      flex-wrap: wrap;
    }
  }
</style>
