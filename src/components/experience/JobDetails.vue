<template>
  <div :class="{jobdetails__selected: selected}">
    <div 
      :id="`details-${job.id}`" 
      class="jobdetails__description"
      
      v-if="selected"
      >
      
      <div class="jobdetails__role">
        {{job.role}} at <a target="__blank" :href="job.companyLink">{{ job.company }}</a>
      </div>
      <div class="jobdetails__period">
        {{ job.from }} - {{ job.to }}
      </div>

      <div class="jobdetails__activities">
        <div v-for="activity of job.activities" :key="activity.description">
          <li 
            :class="{jobdetails__activity_special: activity.special }"
            class="jobdetails__activity">
            {{activity.description}}
          </li>
        </div>
      </div>
  </div>
</div>

</template>


<script lang="ts">
import { IJob } from '@/data/jobs';
import{ defineComponent, PropType, ref, Ref } from 'vue';

export default defineComponent({
  title: 'JobDetails',
  props:{
    job:{
      type: Object as PropType<IJob>,
      required: true
    },
    selected:{
      type: Boolean,
      required: true
    }
  },
})
</script>


<style lang="scss" scoped>
.jobdetails__{

  &selected{
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: .5s;
  }

  &company{
    display: block;
    min-width: 8rem;
    &:hover{
      cursor: pointer;
    }
  }

  &description{
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    transition-duration: .3s;

    @include mobile {
          margin: 0;
          max-width: 99vw;
          width: 100%;
    }
    .jobdetails__{
      &role {
        color: $color-accent;
        font-size: $font-size-md;

        a {
          color: $color-secondary;
          font-size: $font-size-md;
        }
      }

      &period{
        margin-top: .5em;
        font-size: $font-size-xs;
        color: darken($color: $color-primary, $amount: 20%)
      }

      &activities{
        .jobdetails__activity{
          margin-top: 1.5em;
          
        }
        .jobdetails__activity::marker {
          color: $color-accent; font-weight:bold; 
          font-size: 2em;
        }
        .jobdetails__activity_special::marker {
          animation: special-activity 2s ease-in-out infinite;
        }

      }

      @keyframes special-activity {
        50% {
          color: gold;
        }
      }
    }

  }
}


</style>