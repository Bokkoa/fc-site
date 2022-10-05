
<template>
    <header class="nav__header" :class="(scrollPosition > 100 ) ? 'nav__header__shadow expand-padding-animation' : 'shrink-padding-animation' ">
        <nav class="nav__nav">
            <div class="nav__logo">
                <img class="logo" src="../assets/imgs/logo.svg" alt="">
            </div>
            <div class="nav__links">
                <ol>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Experiencie</a>
                    </li>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Projects</a>
                    </li>
                    <li>
                        <a class="underlined fade-in" href="#" @click.prevent="">Contact</a>
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
import { computed, defineComponent, onMounted, Ref, ref } from '@vue/runtime-core'

export default defineComponent({
    name: 'Navbar',
    setup(){
        const scrollPosition: Ref<number> = ref(0);


        function updateScroll(){
            scrollPosition.value = window.scrollY;
        }

        onMounted(() => {
            window.addEventListener('scroll', updateScroll);
        })


        return {
            scrollPosition
        }
            
        
    }
});
</script>

<style lang="scss" scoped>

.nav__header__shadow{
    box-shadow: rgba($color-darker, 0.35) 0px 5px 10px 0px;
}

.nav__header{
    align-content: space-between;
    background-color: $color-darkest;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 99999;

    .nav__nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-right: 2vw;
            padding-left: 2vw;
            padding-top: 5px;
            padding-bottom: 5px;
    }

    .nav__links{

        @include tablet{
            display: none;
        }
        ol{
            display: flex;
            align-items: space-between;

            li{

                @include ipad{
                    margin-left: 4vw;
                    margin-right: 4vw;
                    font-size: $font-size-xs;
                }

                @include retina{
                    margin-left: 5vw;
                }
            

                color: $color-accent;
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
    width: 4em;
    animation: pulse-accent infinite 3s linear;
}

</style>