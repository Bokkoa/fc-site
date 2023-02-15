<template>
    <button 
     
        @click="$emit('on-select', job.id)"
        class="jobcompanybadge__company"
        :class="{jobcompanybadge__selected: jobSelected === job.id}"
      >
        {{job.company}}
    </button>
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
    jobSelected: {
      type: Number,
      required: true
    }
  },
})
</script>


<style lang="scss" scoped>
.jobcompanybadge__{
  &company{
    display: block;
    background: none;
    border: none;
    border-left: 2px solid transparent;
    color: $color-primary;
    height: 2em;
    text-align: left;
    transition-duration: .3s;
    
    &:hover{
      cursor: pointer;
    }
  }
  &selected{
    border-color: $color-accent;
    background-color: $color-darkest-transparent;
    color: $color-accent;
    transition-property: border-left;
    transition-timing-function: ease-in-out;
  }
}

</style>