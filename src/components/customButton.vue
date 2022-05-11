<template>
  <div class="button_wrapper">
    <button class="custom_button"
            :disabled="disabled"
            @click="onButtonClick">
      <slot name="icon"/>
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  name: "customButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    onButtonClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>

.button_wrapper {
  .custom_button {
    max-width: 100%;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    padding: 5px 15px;
    border-radius: 8px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    outline: none;
    border-style: none;
    font-weight: 800;
    font-size: 22px;
    line-height: 31px;
    cursor: pointer;
    background-color: rgba(0, 127, 255, .8);
    color: white;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -ms-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;

    &:hover {
      background-color: rgba(0, 127, 255, 1);
    }

    &:disabled {
      background: rgba(0, 0, 0, 0.1);
      cursor: not-allowed;
    }

    &.primary {
      background: red;
    }
  }
}
</style>
