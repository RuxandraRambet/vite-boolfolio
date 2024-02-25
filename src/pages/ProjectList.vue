<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoading from '../components/AppLoading.vue';
import ProjectSearch from '../components/ProjectSearch.vue';
import store from '../store';
export default {
    name: 'ProjectList',
    components: {
        ProjectCard,
        AppLoading,
        ProjectSearch,
    },
    data() {
        return {
            store,
            loading: false,
            responseData: {},
            errors: null,
            projects: [],
        };
    },
    methods: {
        getProjects() {
            this.errors = null;
            this.loading = true;

            axios.get(this.store.api.baseUrl + this.store.api.apiUrl.projects, {
                params: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                },
            }).then((response) => {
                this.responseData = response.data;
            }).catch(error => {
                console.log(error);
                this.responseData.result.data = [];
                this.errors = error.response.data.message;
            }).finally(() => {
                this.loading = false;
            });
        },
        nextPage() {
            this.store.projects.currentPage++;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                },

            });
            this.getProjects();
        },
        prevPage() {
            this.store.projects.currentPage--;
            this.$router.push({
                name: 'projects',
                query: {
                    page: this.store.projects.currentPage,
                    key: this.store.projects.searchKey,
                },
            });
            this.getProjects();
        },
    },
    created() {
        this.store.projects.currentPage = this.$route.query.page ?? 1;
        this.store.projects.searchKey = this.$route.query.key ?? null;
        this.getProjects();
    },
}
</script>
<template>
    <main>
        <div class="container py-5">
            <h1>My Projects</h1>

            <ProjectSearch @search-project="getProjects" />

            <div v-if="errors">{{ errors }}</div>

            <AppLoading v-if="loading" />
            
            <div class="row mt-5" v-else>
                <div class="col col-md-4 g-3" v-for="project in responseData.result?.data">
                    <ProjectCard :project="project" />
                </div>
                <nav class="my-5">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <button class="btn btn-primary" @click="prevPage" v-show="responseData.result?.prev_page_url">Previous</button>
                        </li>
                        <li>
                            <button class="btn btn-primary" @click="nextPage" v-show="responseData.result?.next_page_url">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </main>
</template>
<style scoped></style>