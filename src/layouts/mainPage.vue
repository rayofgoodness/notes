<template>
  <section class="main_page">
    <div class="container">
      <h1>Main page</h1>
      <div class="notes_wrapper">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainPage",
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.main_page {
  .container {
    .notes_wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 1fr;
      gap: 20px;
    }
  }
}
</style>
