<template>
    <div class="background__section">
        <!-- <img class="background__image" src="../assets/imgs/background01.jpg" alt="" srcset=""> -->
    </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'Background'
})

</script>


<style lang="scss" scoped>

.background__section{
    width: 99vw;
    min-height: 80vh;
    padding: 0;
    position:absolute;

    background-image: linear-gradient( to bottom, rgba($color-darkest, 0), rgba($color-darkest, 1)), url('../assets/imgs/background01.jpg');
    background-size: cover;
    background-position: 0;

    // .background__image{
    //     margin-top: 100px;
    //     width: 100%;
    //     min-height: 100vh;
    //     width: 100%;
    //     height: 600px;
    //     opacity: 0.4;
    //     object-fit: cover;
    //     &:before{
    //         background: linear-gradient( to bottom, rgba($color-darkest, 0), rgba($color-darkest, 1));
    //         content: '';
    //         position: absolute;
    //         top: 0;
    //         right: 0;
    //         bottom: 0;
    //         left: 0;
    //         opacity: .6;
    //     }
    // }
    
}

</style>