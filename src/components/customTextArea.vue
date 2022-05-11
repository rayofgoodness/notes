<template>
  <div class="textarea_wrapper">
    <textarea class="custom_textarea"
              :placeholder="placeholder"
              v-model="input"
              @input="$emit('input', $event.target.value)">

    </textarea>
  </div>
</template>

<script>
export default {
  name: "customTextArea",
  data() {
    return {
      input: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.textarea_wrapper {
  .custom_textarea {
    width: 100%;
    height: 250px;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: text;
    box-shadow: none;
    outline: none;
    padding: 20px 20px;
    border: 1.5px rgba(0, 0, 0, .3) solid;
    resize: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;

    &:hover {
      border-color: rgba(0, 0, 0, .8);
    }

    &:active, :focus, {
      border-color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
