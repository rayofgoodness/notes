<template>
  <div class="trash_icon_wrapper">
    <svg @click="$emit('remove')" :viewBox="view" :width="width" :height="height">
      <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/>
      <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "trashIcon",
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

<style lang="scss" scoped>

.trash_icon_wrapper {
  width: fit-content;

  svg {
    transition: .3s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      fill: red;
      animation: remove 2s ease-in-out infinite;

      @keyframes remove {
        0% {
          transform: rotateZ(-5deg);
        }
        33% {
          transform: rotateZ(30deg);
        }
        66% {
          transform: rotateZ(-30deg);
        }
        100% {
          transform: rotateZ(5deg);
        }
      }
    }
  }
}
</style>
