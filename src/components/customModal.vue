<template>
  <div class="custom_modal" :class="customPopUpClasses">

    <div class="modal_wrapper">

      <div class="modal-content">

        <div v-if="closeButton" @click="$emit('close')" class="modal-close-button">

          <close-icon/>

        </div>

        <div v-if="title" class="modal-title">
          <h2 v-html="title"/>
        </div>

        <div v-if="subTitle" class="modal-sub-title">
          <p v-html="subTitle"/>
        </div>

        <slot/>

      </div>

    </div>

  </div>
</template>

<script>
import closeIcon from "@/components/icons/closeIcon";

export default {
  name: "customModal",
  components: {
    closeIcon
  },
  data() {
    return {
      open: true
    }
  },
  props: {
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    customPopUpClasses: {
      type: String
    },
    closeButton: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style lang="scss" scoped>

.custom_modal {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #1C2241C1;
  z-index: 999;
  opacity: 1;

  .modal_wrapper {
    display: grid;
    min-height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;


    .modal-content {
      position: relative;
      display: grid;
      align-self: center;
      justify-self: center;
      overflow: auto;
      box-sizing: border-box;
      max-width: 100%;
      width: 350px;
      height: auto;
      background: #FFF;
      padding: 10px;
      border-radius: 12px;
      color: #191926FF;


      .modal-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 8px;
        right: 8px;
        width: fit-content;
        height: fit-content;
        cursor: pointer;
        padding: 4px;
        z-index: 999;

        svg {
          path {
            stroke: #191926FF;
          }
        }
      }

      .modal-title {
        display: flex;
        justify-content: center;
        max-width: 100%;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 33px;
        letter-spacing: 2px;
      }

      .modal-sub-title {
        display: flex;
        max-width: 100%;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .popUpWrapper::-webkit-scrollbar {
    width: 0;
  }
}
</style>
