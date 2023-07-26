<template>
  <div class="gallery__bg" v-if="isShowingModal">
    <div class="gallery__container">
      <div class="gallery__modal">
        <h3>{{project.title}}</h3>
        <div class="gallery__img_section">
          <div class="gallery__prev_btn">
            <button :disabled="currentImageIndex <= 0"  @click="onChangeImage(-1)">&lt;</button>
          </div>
          <img
            :src="getImgUrl(`imgs/projects/${project.album.path}/0${currentImageIndex}.png`)"
            alt=""
          />
          <div class="gallery__next_btn">
            <button @click="onChangeImage(1)">&gt;</button>
          </div>
        </div>
        <button :disabled="currentImageIndex >= project.album.maxPhotoNumber" @click="onClick">Confirm is closed: {{isShowingModal}}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getImgUrl } from "@/helpers/imageHelper";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'ModalGallery',
  setup() {
    const store = useStore()
    const project = computed(() => store.state.selectedProject)
    const currentImageIndex = ref(1)
    const onClick = () => {
      store.commit('toggleProjectModal')
    }
    const onChangeImage = (next: number) => {
      console.log(next)
      const limitIndex = project.value.album.maxPhotoNumber
      const nextPhotoIndex = isNegativeNumber(next) 
                            ? currentImageIndex.value - next 
                            : currentImageIndex.value + next
      console.log(limitIndex)
      console.log(nextPhotoIndex)
      if((limitIndex > nextPhotoIndex) && !isNegativeNumber(nextPhotoIndex) ) {
        currentImageIndex.value = nextPhotoIndex
      } else {
        console.warn('Is not a valid new number')
      }

    }
    const isNegativeNumber = (value: number):boolean => {
      return value < 0
    }
    return {
      getImgUrl,
      onClick,
      isShowingModal: computed( () => store.state.showProjectModal),
      project,
      currentImageIndex,
      onChangeImage
    };
  },
  
});
</script>

<style lang="scss" scoped>
.gallery__bg {
  background-color: rgba($color-darkest, 0.88);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
}

.gallery__img_section {
  display: flex;
  align-items: center;
  gap: 2em;
  img {
    width: 70vw;
    height: 65vh;
    border-radius: 0.5em;
  }
}

.gallery__container {
  position: fixed;
  top: 2vh;
  left: 10vh;
  width: 90%;
  overflow: auto;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.313);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1em);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .gallery__modal {
    text-align: center;
    padding: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;

    h3 {
      font-size: 1.5rem;
      margin: 0.1em;
      color: $color-primary;
    }

    button {
      background-color: transparent;
      border-color: transparent;
      border-radius: $border-radius-sm;
      border-style: solid;
      color: $color-accent;
      padding: 0.5rem 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>