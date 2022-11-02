<template>
  <div class="jobdetails__container">
    <div class="jobdetails__description" v-if="selected">
      
      <div class="jobdetails__role">
        {{job.role}}
      </div>
      <div class="jobdetails__activities">
        <div v-for="activity of job.activities" :key="activity.description">
          {{activity.description}}
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

  &container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    .jobdetails__role{
      background-color: blue;
    }

    .jobdetails__activities{
      background-color: yellow;
    }
  }
}


</style>