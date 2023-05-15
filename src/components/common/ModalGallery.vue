<template>
  <div class="gallery__bg">
    <div class="gallery__container">
      <div class="gallery__modal">
        <h3>RFID Middleware</h3>
        <div class="gallery__img">
          <div class="gallery__prev_btn">
            <button>&lt;</button>
          </div>
          <img
            :src="getImgUrl('imgs/projects/rfid_middleware/01.png')"
            alt=""
          />
          <div class="gallery__next_btn">
            <button>&gt;</button>
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getImgUrl } from "@/helpers/imageHelper";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      getImgUrl,
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
  z-index: 9;
}

.gallery__img {
  display: flex;
  align-items: center;
  gap: 3em;
  img {
    width: 40vw;
    height: 40vh;
    border-radius: 0.5em;
  }
}

.gallery__container {
  position: fixed;
  top: 20vh;
  left: 20vw;
  width: 60%;
  overflow: auto;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.313);
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1em);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

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