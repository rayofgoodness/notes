<template>
  <div class="input_wrapper">
    <input v-model="input"
           class="custom_input"
           :class="customClass"
           :disabled="isDisabled"
           :type="type">
  </div>
</template>

<script>
export default {
  name: "customInput",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
  },
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.input_wrapper {
  .custom_input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: text;
    box-shadow: none;
    outline: none;
    padding: 10px 20px;
    border: 1.5px rgba(0, 0, 0, .3) solid;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    &:hover {
      border-color: rgba(0, 0, 0, .8);
    }

    &:active, :focus, {
      border-color: rgba(0, 0, 0, 1);
    }

    &:disabled {
      pointer-events: none;
      cursor: not-allowed;
    }

    &.checked {
      text-decoration: line-through;
    }

    &.checkbox {
      cursor: pointer;
      width: 40px;
      height: 40px;
      margin: 0;
    }
  }
}
</style>
