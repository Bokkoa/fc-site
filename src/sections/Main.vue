<template>
    <section class="section main__section">
        <div class="content main__content">

            <div class="main__title animate__animated animate__fadeInLeft">
                <h4 class="main__introduction">Hola, mi nombre es </h4>
            </div>
            <div class="main__title animate__animated animate__fadeInLeft">
                <h1 class="main__name">
                    <b class="main__connotation-letter">F</b>elipe 
                    <b class="main__connotation-letter">C</b>ruz.
                </h1>
            </div>
            <div class="main__title animate__animated animate__fadeInLeft">
                <h3 class="main__job">Soy ingeniero de software.</h3>
            </div>
            <div class="animate__animated animate__fadeIn">

                <p class="main__description">Soy ingeniero de software especializado en el desarrollo backend y
                    (Ocasionalmente) desarrollo frontend. Actualmente estoy desarrollando un
                    proyecto de gestión de almacenes (WMS).
                </p>
            </div>
            <div class="animate__animated animate__fadeIn">
                <button id="cv-button">
                    ¡Descarga mi CV!
                </button>
            </div>

        </div>
    </section>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: 'Main'
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

   
    .main__title{
        margin: 0;
        padding: 0;
        h4, h1, h3{
            padding: 0;
            margin: .5vh;
        }
        .main__job{
            font-size: $font-size-xl;
        }
        .main__introduction{
            font-size: $font-size-md;
        }
        .main__name{
            font-size: $font-size-xxl;
            .main__connotation-letter{
                font-size: $font-size-xxl;
                color: $color-accent;
            }
        }
    }
    .main__description{
        font-size: $font-size-sm;
    }
}

#cv-button{
    border-radius: $border-radius-sm;
    padding: 1em;
    background-color: transparent;
    font-weight: bold;
    color: $color-neutral-light;
    border-color: $color-neutral-light;
    border-style: solid;
    transition: .2s;
}

#cv-button:hover{
    background-color: $color-darker;
    color: $color-accent;
    border-color: $color-accent;
    font-size: $font-size-sm + .1rem;
    cursor: pointer;
}


@for $i from 1 to 10 {
  .main__content div:nth-child(#{$i}) { animation-delay: $i * 0.45s; }
}
</style>