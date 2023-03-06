<template>
  <div class="joblist__container">
    <div class="jobcompanybadge__container" role="tablist" aria-label="Jobs">
      <JobCompanyBadge v-for="job of jobs" 
        :key="job.id" 
        :job="job" 
        :jobSelected="jobSelected ?? 0"
        @on-select="handleSelect" />
    </div>

    <div  class="jobdetails__container">
      <JobDetails 
        v-for="job of jobs" 
        :key="job.id" 
        :job="job" 
        :selected="jobSelected === job.id" 
      />
    </div>
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

    const jobSelected:Ref<number|undefined> = ref(jobs[jobs.length - 1].id);
    
    const handleSelect = (id:number) => {
      jobSelected.value = id;
    }

    return {
      jobs: jobs.reverse(),
      jobSelected,
      handleSelect,
    }
  }
});
</script>

<style lang="scss" scoped>
.joblist__container{
  display: flex;
  flex-direction: row;
  // min-height: 25em;
  @include big-mobile {
    flex-direction: column;
    min-width: 0;
    width: 100%;
  }
}

.jobdetails__container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: flex-start;  
    @include big-mobile {
          margin: 0;
          width: 100%;
          max-width: 80vw;
    }
}

.jobcompanybadge__container{
    display: flex;
    flex-shrink: 0;
    flex-basis: 12em;
    flex-direction: column;
    flex-wrap: wrap;

    @include big-mobile {
      flex-direction: row;
      flex-shrink: 1;
      flex-basis: auto;
      justify-content: space-between;
      margin-bottom: 4em;
    }

    @include mobile {
          margin: 0;
          width: 100%;
          max-width: 80vw;
          margin-bottom: 2em;
    }

    @include mini-mobile {
      margin: 0;
      max-width: 99vw
    }
}
</style>