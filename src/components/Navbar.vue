
<template>
    <header class="nav__header nav__header__shadow">
        <nav class="nav__nav">
            <div class="nav__logo">
                <img class="logo-animation logo" src="../assets/imgs/logo.png" alt="">
            </div>
            <div class="nav__links">
                <ol>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Experiencia</a>
                    </li>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Proyectos</a>
                    </li>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Contactame</a>
                    </li>
                </ol>
            </div>
            <div class="nav__bars">
                :D
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
export default defineComponent({
    name: 'Navbar'
});
</script>

<style lang="scss" scoped>

.nav__header__shadow{
    box-shadow: rgba(black, 0.1) 0px 5px 10px 0px;
}

.nav__header{
    align-content: space-between;
    background-color: $color-darkest;
    display: flex;
    position: fixed;
    width: 99vw;
    z-index: 99999;
    

    .nav__nav{
            width: 100vw;
            display: flex;
            justify-content: space-between;
            // padding: 0.5rem calc((100vw-1200px) / 2)
            padding-right: 2vw;
            padding-left: 2vw;
            padding-top: 15px;
    }

    .nav__links{

        @include tablet{
            display: none;
        }
        ol{
            display: flex;
            align-items: space-between;
            li{
                list-style: decimal-leading-zero;
                font-size: $font-size-sm;
                margin-left: 2vw;
                margin-right: 2vw;
                 a{
                    color: $color-primary;
                    font-size: 1.5em;
                 }
            }
        }

    }

    .nav__bars{
        opacity: 0;
        display: none;
        @include tablet{
            opacity: 1;
            display: inline-block;
            color: $color-darker;
            font-size: 1rem;
        }
    }

}

.logo{
    width: 3em;
}

</style>