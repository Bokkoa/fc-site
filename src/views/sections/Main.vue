<template>
    <section class="section main__section">
        <div class="content main__content">
            <div class="main__title" style="color: red">
              <h3>Work in progress</h3>
            </div>
            <div class="main__title animate__animated animate__fadeInLeft">
                <h4 class="main__introduction">Hello, my name is </h4>
            </div>
            <div class="main__title animate__animated animate__fadeInLeft">
                <h1 class="main__name">
                    Felipe 
                    Cruz.
                </h1>
            </div>
            <div class="main__title animate__animated animate__fadeInLeft">
                <h3 class="main__job">I'm a software engineer.</h3>
            </div>
            <div class="animate__animated animate__fadeIn">
                <p class="main__description">I'm a software engineer speciallized in backend side development and (ocassionally)
                    a frontend developer. 
                    <br>
                    Currently i'm have a Tech lead developer role for multiple warehouse management software applications and features.
                </p>
            </div>
            <div class="animate__animated animate__fadeIn">
                <a id="cv-button" :href="`${baseUrl}/docs/CV.pdf`" target="_blank">
                    Download my CV!
                </a>
            </div>

        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { useStore } from "vuex"

export default defineComponent({
    name: 'Main',
    setup(){
        const store = useStore();

        const baseUrl = ref( store.state.baseUrl );

        return {
            baseUrl
        }
    }
})
</script>


<style lang="scss" scoped>

.main__content{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;

    @include mobile {
        margin: 0;
        width: 100%;
        max-width: 80vw;
        margin-bottom: 2em;
    }
   
    .main__title{
        margin: 0;
        padding: 0;
        h4, h1, h3{
            padding: 0;
            margin: .5vh;
        }
        .main__job{
            color: $color-tertiary;
            font-size: $font-size-xl;
        }
        .main__introduction{
            color: $color-tertiary;
            font-size: $font-size-md;
        }
        .main__name{
            color: $color-tertiary;
            font-size: $font-size-xxl;
            // .main__connotation-letter{
            //     font-size: $font-size-xxl;
            //     color: $color-accent;
            // }
        }
    }
    .main__description{
        font-size: $font-size-sm;
        color: $color-tertiary;
    }
}

#cv-button{
    background-color: transparent;
    border-color: $color-accent;
    border-radius: $border-radius-sm;
    border-style: solid;
    color: $color-accent;
    display: inline-block; 
    font-weight: bold;
    padding: 1em;
    text-decoration: none;
    transition: .2s;
}

#cv-button:hover{
    background-color: $color-darker;
    border-color: $color-accent;
    color: $color-accent;
    cursor: pointer;
    font-size: $font-size-sm + .05rem;
}


@for $i from 1 to 6 {
  .main__content div:nth-child(#{$i}) { animation-delay: $i * 0.45s; }
}
</style>