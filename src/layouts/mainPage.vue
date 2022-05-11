<template>
  <section class="main_page">
    <div class="container">
      <h1>Main page</h1>
      <div class="notes_wrapper">
        <div class="note" v-for="note in NOTES" :key="note.id">
          <custom-note :data="note" @editNote="editNote(note.id)"/>
        </div>
        <div class="add_note">
          <custom-create-note/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex";
import customNote from "@/components/customNote";
import customCreateNote from "@/components/customCreateNote";

export default {
  name: "mainPage",
  components: {
    customNote,
    customCreateNote
  },
  data() {
    return {}
  },
  created() {
    if (localStorage.getItem('notes')) {
      this.$store.commit('SET_NOTES_FROM_LOCAL_STORE',JSON.parse(localStorage.getItem('notes')));
    }else {
      let storageNotes = JSON.stringify(this.NOTES)
      localStorage.setItem('notes', storageNotes);
    }
  },
  computed: {
    ...mapGetters([
        'NOTES'
    ])
  },
  methods: {
    editNote(id) {
      this.$router.push(`/edit/${id}`)
    },
  }
}
</script>

<style lang="scss" scoped>

.main_page {
  .container {
      max-width: 1440px;
      margin: 0 auto;

    .notes_wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 1fr;
      gap: 20px;
    }
  }
}
</style>
