<template>
  <div class="add_icon_wrapper">
    <svg @click="$emit('add')" :viewBox="view" :width="width" :height="height">
      <path
          d="M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "addIcon",
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

<style lang="scss">

.add_icon_wrapper {
  width: fit-content;
  height: fit-content;

  svg {
    transition: .3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
}

</style>
