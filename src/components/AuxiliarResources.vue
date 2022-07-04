<template>

    <div class="auxiliar">

        <div class="auxiliar__social_links_tree">
            <div class="auxiliar__social_link">
                <div class="auxiliar__social_img github_icon"></div>
                <p class="auxiliar__social_title">Github</p>
            </div>

             <div class="auxiliar__social_link">
                 <div class="auxiliar__social_img gitlab_icon"></div>
                <p class="auxiliar__social_title">Gitlab</p>
            </div>

            <div class="auxiliar__social_link">
                <div class="auxiliar__social_img linkedin_icon"></div>
                <p class="auxiliar__social_title">Linkedin</p>
            </div>
       
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

        display: flex;
        position: fixed;
        bottom: 1em;
        left: 2em;


        @include mobile{
            display: none;
        }

        &__social_links_tree{
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            width: 8em;
        }

        &__social_link{
            margin: .5rem;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 7em;

            &:hover .auxiliar__social_title{
                opacity: 1;
            }
        }

        &__social_title{
            align-self: center;
            display: flex;
            opacity: 0;
            padding: 0;
            margin: 0;
            margin-left: 1em;
            transition: 0.3s;
        }


        .auxiliar__social_img{
            background-color: $color-accent;
            display: inline-block;
            height: 2em;
            width: 2em;

            &:hover{
                background-color: $color-primary;
            }
        }

        .gitlab_icon{
            mask: url('../assets/imgs/icons/gitlab.svg') no-repeat center / contain;
            -webkit-mask: url('../assets/imgs/icons/gitlab.svg') no-repeat center / contain;
        }

        .linkedin_icon{
            mask: url('../assets/imgs/icons/linkedin.svg') no-repeat center / contain;
            -webkit-mask: url('../assets/imgs/icons/linkedin.svg') no-repeat center / contain;
        }

        .github_icon{
            mask: url('../assets/imgs/icons/github.svg') no-repeat center / contain;
            -webkit-mask: url('../assets/imgs/icons/github.svg') no-repeat center / contain;
        }
    }
</style>