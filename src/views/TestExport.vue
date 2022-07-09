<template>
<div class="test">
  <TestView msg="hellow"/>
</div>
</template>
<script>
import TestView from '@/components/Test.vue'
export default {
  name: 'TestExport',
  components: {
    TestView
  }

}
</script>
