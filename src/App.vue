<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppMain from './components/AppMain.vue';
export default {
  name: 'Boolfolio',
  components: {
    AppHeader,
    AppFooter,
    AppMain,
  },
  data(){
    return {
      'baseUrl': 'http://127.0.0.1:8000',
      'apiUrl': {
        'projects': '/api/projects',
      },
    };
  },
  methods: {
    getProjects(){
      axios.get(this.baseUrl + this.apiUrl.projects).then((response) => {
        console.log(response);
      }).catch(error =>{
        console.log(error);
      });
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
