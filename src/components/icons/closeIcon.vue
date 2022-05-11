<template>
  <svg :width="width" :height="height" :viewBox="view" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L17 17M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<script>
export default {
  name: "closeIcon",
  props: {
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    view: {
      type: String,
      default: '0 0 24 24'
    },
  }
}
</script>

<style scoped>

</style>
