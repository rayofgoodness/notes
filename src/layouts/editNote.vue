<template>
  <section>
    <div class="container">
      <p class="bread_crumbs" @click="openModalBackToMainPage">
        Main page
      </p>
      <div class="edit_page_wrapper">
        <div class="title_block">
          <h1 class="title">Edit note</h1>
        </div>
        <div class="add_form">
          <div class="form_title">
            <p class="title_text">
              Note title
            </p>
            <custom-input v-model="editedNote.name"/>
          </div>
          <div class="form_data">
            <p class="title_text">
              Todo list:
            </p>
            <div class="todos_wrapper">
<!--               Better use :key="todo.id", but editedNote.data - array of string, and they're don't have id's in this case-->
              <div class="todo" v-for="todo in editedNote.data" :key="editedNote.data[todo]">
                <custom-input :type="'checkbox'"
                              :custom-class="'checkbox'"
                              v-model="todo.checked"/>
                <custom-input
                    v-model="todo.description"
                    :is-disabled="todo.checked"
                    :custom-class="todo.checked ? 'checked' : ''"/>
                <trash-icon @remove="openModal(todo)"/>
              </div>
              <div class="add_todo">
                <add-icon @add="addTodo"/>
              </div>
            </div>
          </div>
          <div class="form_button">
            <custom-button @click="isCancelChanges = true">
              Cancel changes
            </custom-button>
            <custom-button @click="saveChanges">
              Save changes
            </custom-button>
          </div>
        </div>
        <p class="saved_message" v-if="isSavedChanges">Changes saved</p>
      </div>
      <custom-modal v-if="isBackToMainPage"
                    :title="`Save changes?`"
                    @close="closeModalBackToMainPage">
        <div class="buttons_block">
          <custom-button @click="backToMainPage">
            Save
          </custom-button>
          <custom-button @click="backToMain">
            Cancel
          </custom-button>
        </div>
      </custom-modal>
      <custom-modal v-if="isCancelChanges"
                    :title="`Cancel changes?`"
                    @close="isCancelChanges = false">
        <div class="buttons_block">
          <custom-button @click="cancelChanges">
            Yes
          </custom-button>
          <custom-button @click="isCancelChanges = false">
            No
          </custom-button>
        </div>
      </custom-modal>
      <custom-modal v-if="isRemovedTodo"
                    :title="`Delete ?`"
                    @close="isRemovedTodo = false">
        <div class="buttons_block">
          <custom-button @click="removeTodo(removedTodo)">
            Delete
          </custom-button>
          <custom-button @click="isRemovedTodo = false">
            Cancel
          </custom-button>
        </div>
      </custom-modal>
    </div>
  </section>
</template>

<script>
import customInput from "@/components/customInput";
import customButton from "@/components/customButton";
import {mapGetters} from "vuex";
import trashIcon from "@/components/icons/trashIcon";
import addIcon from "@/components/icons/addIcon";
import customModal from "@/components/customModal";

export default {
  name: "editPage",
  components: {
    customInput,
    customButton,
    trashIcon,
    addIcon,
    customModal
  },
  data() {
    return {
      editedNote: {},
      isBackToMainPage: false,
      isCancelChanges: false,
      isRemovedTodo: false,
      isSavedChanges: false,
      removedTodo: {},
    }
  },
  async beforeCreate() {
    if (localStorage.getItem('notes')) {
      await this.$store.commit('SET_NOTES_FROM_LOCAL_STORE', JSON.parse(localStorage.getItem('notes')));
    }
    this.editedNote = this.NOTE(+this.$route.params.id);
  },
  computed: {
    ...mapGetters([
      'NOTE'
    ]),
  },
  methods: {
    openModalBackToMainPage() {
      this.isBackToMainPage = true;
    },
    closeModalBackToMainPage() {
      this.isBackToMainPage = false;
    },
    saveChanges() {
      this.$store.commit('ADD_NOTE_TO_NOTES', this.editedNote);
      this.displayNotification();
    },
    backToMainPage() {
      this.$store.commit('ADD_NOTE_TO_NOTES', this.editedNote);
      this.$router.push('/');
    },
    cancelChanges() {
      const notes = JSON.parse(localStorage.getItem('notes'));
      this.editedNote = notes.find(note => note.id === +this.$route.params.id);
      this.isCancelChanges = false;
    },
    openModal(todo) {
      this.removedTodo = todo;
      this.isRemovedTodo = true;
    },
    removeTodo(item) {
      this.editedNote.data = this.editedNote.data.filter(todo => todo !== item);
      this.isRemovedTodo = false;
    },
    addTodo() {
      let newTodo = {
        checked: false,
        description: ''
      };
      this.editedNote.data.push(newTodo);
    },
    backToMain() {
      this.$router.push('/');
    },
    displayNotification() {
      this.isSavedChanges = true;
      setTimeout((()=>{
        this.isSavedChanges = false;
      }), 2000)
    },
  }
}
</script>

<style lang="scss" scoped>

.container {
  max-width: 1440px;
  margin: 0 auto;

  .bread_crumbs {
    cursor: pointer;
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
    color: rgba(0, 127, 255, .8);
  }

  .edit_page_wrapper {
    display: grid;
    max-width: 100%;
    width: 500px;
    margin: 0 auto;

    .title_block {

      .title {
        justify-self: center;
        font-size: 31px;
        line-height: 33px;
        font-weight: 900;
        letter-spacing: 2px;
      }
    }

    .add_form {
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: max-content;
      grid-gap: 20px;

      .form_title, .form_data {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
        grid-gap: 5px;

        .title_text {
          font-size: 24px;
          line-height: 30px;
          font-weight: 700;
        }
      }

      .form_data {

        .todos_wrapper {
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

      .form_button {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
      }
    }

    .saved_message {
      display: grid;
      justify-self: center;
      color: green;
      font-weight: 700;
      font-size: 24px;
      line-height: 31px;
      margin-top: 30px;
    }
  }

  .buttons_block {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
}

</style>
