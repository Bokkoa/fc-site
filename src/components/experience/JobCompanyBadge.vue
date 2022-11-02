<template>
  <div class="jobcompanybadge__container">
    <div 
        @click="$emit('on-select', job.id)"
        class="jobcompanybadge__company">
        {{job.company}}
    </div>
  </div>
</template>


<script lang="ts">
import { IJob } from '@/data/jobs';
import{ defineComponent, PropType } from 'vue';

export default defineComponent({
  title: 'JobCompanyBadge',
  props:{
    job:{
      type: Object as PropType<IJob>,
      required: true
    },
  },
})
</script>


<style lang="scss" scoped>
.jobcompanybadge__{

  &container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &company{
    display: block;
    &:hover{
      cursor: pointer;
    }
  }

}

</style>