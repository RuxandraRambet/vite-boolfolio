<script>
import store from '../store';
export default {
  name: 'ProjectSearch',
  data() {
    return {
      store,
    };
  },
  emits: ['searchProject'],
  methods: {
    search() {
      this.store.projects.currentPage = 1;
      this.$router.push({
        name: 'projects',
        query: { page: 1, key: this.store.projects.searchKey },
      });
      this.$emit('searchProject');
    },
  },
};
</script>
<template>
  <section id="post-search">
    <form action="" @submit.prevent="search">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="search-key"
          placeholder="Search in Projects"
          v-model="store.projects.searchKey"
        />
        <label for="search-key">Search in Projects</label>
      </div>
      <button class="btn btn-primary">Search</button>
    </form>
  </section>
</template>