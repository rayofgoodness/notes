<template>
  <div class="note_wrapper">
    <div class="add_note_icon" @click="openSaveChangesModal">
      <addIcon/>
    </div>
    <custom-modal v-if="isOpenSaveChanges"
                  :title="'Create note'"
                  @close="closeSaveChangesModal">
      <div class="create_todo_form">
        <div class="title_form">
          <p class="form_title">Note name</p>
          <custom-input v-model="noteTitle"
                        :placeholder="'Write note name'"/>
        </div>
        <div class="todos_form">
          <p class="form_title">Todo</p>
          <div class="todo" v-for="todo in noteTodo" :key="noteTodo[todo]"> // Better use :key="todo.id", but noteTodo - array of string, and they're don't have id's in this case
            <custom-input v-model="todo.checked"
                          :type="'checkbox'"
                          :custom-class="'checkbox'"/>
            <custom-input
                v-model="todo.description"
                :is-disabled="todo.checked"
                :custom-class="todo.checked ? 'checked' : ''"
                :placeholder="todo.description"/>
          </div> //
          <div class="add_todo">
            <add-icon @add="addTodo"/>
          </div>
        </div>
      </div>
      <div class="buttons_block">
        <custom-button @click="isOpenSaveChanges = false">Cancel</custom-button>
        <custom-button @click="createNewNote">Create</custom-button>
      </div>
    </custom-modal>
  </div>
</template>

<script>
import customModal from "@/components/customModal";
import customButton from "@/components/customButton";
import addIcon from "@/components/icons/addIcon";
import customInput from "@/components/customInput";
import {mapGetters} from "vuex";

export default {
  name: "customCreateNote",
  components: {
    customModal,
    customButton,
    addIcon,
    customInput,
  },
  data() {
    return {
      isOpenSaveChanges: false,
      noteTitle: '',
      noteTodo: [
        {
          checked: false,
          description: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'NOTES'
    ])
  },
  methods: {
    openSaveChangesModal() {
      this.isOpenSaveChanges = true;
    },
    closeSaveChangesModal() {
      this.isOpenSaveChanges = false;
    },
    createNewNote() {
      let id = this.NOTES.length + 1;
      let createdNote = {
        id: id,
        name: this.noteTitle,
        data: this.noteTodo,
      };
      this.$store.commit('CREATE_NOTE', createdNote);
      createdNote = {};
      this.closeSaveChangesModal();
    },
    addTodo() {
      let newTodo = {
        checked: false,
        description: ''
      };
      this.noteTodo.push(newTodo);
    }
  }
}
</script>

<style lang="scss">

.note_wrapper {
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  padding: 10px;
  border: 1.5px rgba(0, 0, 0, .8) solid;
  border-radius: 8px;
  box-sizing: border-box;
  transition: .3s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: green;

    .add_note_icon {
      .add_icon_wrapper {
        svg {
          fill: green;
          animation: add 1s ease-in-out infinite;

          @keyframes add {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
            100% {
              transform: scale(1);
            }
          }
        }
      }
    }
  }

  .add_note_icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons_block {
    margin-top: 30px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .create_todo_form {
    .todos_form {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      align-items: center;
      grid-gap: 10px;

      .todo {
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        align-items: center;
        grid-gap: 10px;
      }

      .add_todo {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
