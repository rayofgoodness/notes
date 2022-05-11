<template>
  <div class="note_wrapper">
    <div class="note_title_block">
      <h4 class="note_title" v-html="data.name"></h4>
      <div class="icon_block">
        <addIcon @editNote="$emit('editNote')"/>
        <trashIcon @remove="openModalSaveChanges"/>
      </div>
    </div>
    <div class="note_data_block">
      <p>TODO LIST:</p>
      <div class="todo_list">
        <div class="todo" v-for="todo in data.data.slice(0, 2)" :key="data.data[todo]"> // Better use :key="todo.id", but data.data - array of string, and they're don't have id's in this case
          <p :class="todo.checked ? 'checked' : ''" v-html="todo.description"/>
        </div>
      </div>
    </div>
    <custom-modal v-if="saveChanges"
                  :title="`Approve delete ${data.name}?`"
                  @close="closeModalSaveChanges">
      <div class="buttons_block">
        <custom-button @click="removeNote(data.id)">Delete</custom-button>
        <custom-button @click="closeModalSaveChanges">Cancel</custom-button>
      </div>
    </custom-modal>
  </div>
</template>

<script>
import addIcon from "@/components/icons/editIcon";
import trashIcon from "@/components/icons/trashIcon";
import customModal from "@/components/customModal";
import customButton from "@/components/customButton";

export default {
  name: "customNote",
  components: {
    addIcon,
    trashIcon,
    customModal,
    customButton
  },
  data() {
    return {
      saveChanges: false,
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    openModalSaveChanges() {
      this.saveChanges = true;
    },
    closeModalSaveChanges() {
      this.saveChanges = false;
    },
    removeNote(id) {
      this.$store.commit('REMOVE_NOTE_FROM_NOTES', id)
    },
  }
}
</script>

<style lang="scss" scoped>

.note_wrapper {
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  padding: 10px;
  border: 1.5px rgba(0, 0, 0, .8) solid;
  border-radius: 8px;
  box-sizing: border-box;

  .note_title_block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    .note_title {
      font-weight: 600;
      font-size: 28px;
      line-height: 28px;
    }

    .icon_block {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      align-items: center;
    }
  }

  .note_data_block {
    .todo_list {
      .todo {
        box-sizing: border-box;
        margin-left: 20px;

        .checked {
          text-decoration: line-through;
        }
      }
    }
  }

  .buttons_block {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  &:hover {
    box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);
  }

  &.complete {
    border-color: green;
    background-color: rgba(0, 128, 0, 0.4);
  }
}
</style>
