<template>
  <div class="joblist__container">
    <JobCompanyBadge v-for="job of jobs" 
      :key="job.id" 
      :job="job" 
      @on-select="handleSelect" />

    <JobDetails 
      v-for="job of jobs" 
      :key="job.id" 
      :job="job" 
      :selected="jobSelected === job.id" 
     
    />
  </div>
</template>


<script lang="ts">
import { jobs } from '@/data/jobs';
import { defineComponent, ref, Ref } from '@vue/runtime-core'
import JobCompanyBadge from './JobCompanyBadge.vue';
import JobDetails from './JobDetails.vue';

export default defineComponent({
  name: 'JobList',
  components: {
    JobDetails,
    JobCompanyBadge
  },
  
  setup(){

    const jobSelected:Ref<number|undefined> = ref(0);
    
    const handleSelect = (id:number) => {
      jobSelected.value = id;
    }

    return {
      jobs,
      jobSelected,
      handleSelect,
    }
  }
});
</script>

<style lang="scss" scoped>
.joblist__container{
  display: flex;
  flex-direction: column;
}
</style>