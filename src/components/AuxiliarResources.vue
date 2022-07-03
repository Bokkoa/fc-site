<template>

    <div class="auxiliar">

        <div class="auxiliar__social_links_tree">
            <!-- <div class="auxiliar__social_link">
                <p>
                    Github
                </p>
                <img class="auxiliar__social_img" src="../assets/imgs/icons/github.svg" />
            </div>


             <div class="auxiliar__social_link">
                <p>
                    Gitlab
                </p>
                <img class="auxiliar__social_img" src="../assets/imgs/icons/gitlab.svg" />
            </div>


            <div class="auxiliar__social_link">
                <p>
                    Linkedin
                </p>
                <img class="auxiliar__social_img" src="../assets/imgs/icons/linkedin.svg" />
            </div>
        -->
        </div> 


        <div class="auxiliar__mail">

        </div>


    </div>


</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";


export default defineComponent({
    name: 'AuxiliarResources',
});

</script>

<style lang="scss" scoped> 
    .auxiliar{
        background: red;
        display: flex;
        position: fixed;
        bottom: 50;

        .auxiliar__social_img{
            width: 50px;
            background: red;
        }
    }
</style>