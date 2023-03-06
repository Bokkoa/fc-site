<template>
    <section class="section about__section">
        <div class="content about__content">
            
            <h2 class="about__title title__section">About me</h2>

            <div class="about__box">

                <div class="about__description">
                        <p>
                            Hello, my name is Felipe Cruz, and I'm a software engineer!
                            I've been working professionally in software development since 2019.
                            "No matter how long the tree floats in the river, it will never turn into a crocodile".
                        </p>
                        <p>
                            In my earlys, I had the privilege to learn about a lot of things related to software development as processes, client meetings and company flows.
                            I learned a lot of things related with 
                            <span>
                                providers, recruitment, rest API development, frontend SPA development, 
                                and linux servers management.
                            </span>
                        </p>
                        
                        <p>
                            Before my current job, I was working as Semi SR developer. In this
                            case, I found that there is still a lot of things to know, so, I trained myself to get an strict study discipline.
                            With the past of time, I learned about different subjects, most relevant 
                            <span>
                                design patterns, unit and integration testing,
                                clean code, solid, microservices and scrum.
                            </span> 
                        </p>
                        <p>
                            Currently, I got a promotion as a Tech Lead developer, where I'm learning, successfully applying and practicing about
                            <span>
                                architectural patterns, leadership,
                                DevOps culture, Testing Driven Development and Domain Driven Design.
                            </span>
                        </p>
                </div>
                
                <img class="about__image" src="../../assets/imgs/me.jpg" alt="">
                
            </div>

            <p>There's my most recent and favorites technologies:</p>
            <ul class="about__stack">
                <li>React</li>
                <li>Vue</li>
                <li>Node</li>
                <li>NestJS</li>
                <li>.NET Core</li>
                <li>Docker</li>
            </ul>

        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  name:'About'
})
</script>


<style lang="scss" scoped>

.about__{

    &box{
        display: flex;
        justify-content: center;
        align-items: center;
        
        @include ipad {
          flex-direction: column;
        }
        @include mobile {
          align-items: flex-start;
        }


        .about__image{
            min-width: 13vw;
            border-radius: 10%;
            width: 13vw;
            box-shadow: rgba($color-tertiary, 0.25) 0px 25px 50px -12px;
            
            @include ipad {
              margin: 5em;
              width: 15vw;
            }

            @include big-mobile {
              margin: 3em;
              width: 50vw;
            }
        }

        .about__description{
            margin-right: 1.5rem;

            @include ipad {
                 flex-direction: column;
                 max-width: 70vw;
            }

            @include big-mobile {
              margin-right: 0;
            }
            @include mobile {
              margin: 0;
            }
        }

        
        
    }
    
    &stack{
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;

        @include big-mobile {
          margin: 0;
          padding: 0;
        }

        li {
            padding-left: 1.3em;
            list-style: none;

            @include big-mobile {
              margin: 4vw;
              padding-left: 1em;
            }
         
        }
        li:before {
            content: "*"; 
            color: $color-accent;
            display: inline-block;
            margin-left: -1.3em;
            width: 1.3em;
        }

        
        
      @include big-mobile {
        overflow-y: scroll;
        flex-basis: auto;
        min-width: 0;
        max-width: 99vw;
      }

      @include mobile {
            margin: 0;
            width: 100%;
            max-width: 80vw;
            flex-direction: column;
      }
    }

    &content{
        p{
            font-size: $font-size-sm;
            span{
                color: $color-accent;
            }
        }
    }
  

}

</style>