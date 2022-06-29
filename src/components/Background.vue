<template>
    <div class="background__section">
        <img class="background__image" 
             :src="require('@/assets/imgs/' + backgroundUrl)"
             alt="" srcset="">
    </div>
</template>


<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref, Ref } from "vue";


export default defineComponent({
    name: 'Background',
    setup(){

        const MIN = 1;
        const MAX = 3;
        const backgroundNumber:number = Math.floor(Math.random() * (MAX - MIN + MIN)) + MIN;
        const backgroundUrl:Ref<string> = ref(`background0${backgroundNumber}.jpg`)
        
        console.log(backgroundUrl.value)
        return {
           backgroundUrl
        }
    }
})

</script>


<style lang="scss" scoped>

// // style that works without random bg
// .background__section{
//     width: 99vw;
//     min-height: 76vh;
//     padding: 0;
//     position:absolute;

//     background-image: linear-gradient(  rgba($color-darkest, 1), rgba($color-darkest, 0), rgba($color-darkest, 1)), url('../assets/imgs/background01.jpg');
//     background-size: cover;
//     background-position: 0;
    
// }


// with image
.background__section{
    width: 99vw;
    min-height: 76vh;
    padding: 0;
    overflow: hidden;
    position:absolute;
    display:inline-block;

    &:after{
        content:'';
        position:absolute;
        left:0; top:0;
        width:100%; height:100%;
        display:inline-block;
        background: linear-gradient(  rgba($color-darkest, 1), rgba($color-darkest, 0), rgba($color-darkest, 1));
    }

    .background__image{
        display:block;
        width: 100%;
        min-height: 80vh;
        opacity: .8;
        width: 100%;
        height: 600px;
    }
    
}

</style>