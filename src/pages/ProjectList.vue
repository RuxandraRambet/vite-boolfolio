<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            loading: false,
            currentPage: 1,
            projects: [],
            'baseUrl': 'http://127.0.0.1:8000',
            'apiUrl': {
                'projects': '/api/projects',
            },
        };
    },
    methods: {
        getProjects() {
            this.loading = true;

            axios.get(this.baseUrl + this.apiUrl.projects, {
                params: {
                    page: this.currentPage,
                },
            }).then((response) => {
                this.projects = response.data.results.data;
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        },
        nextPage() {
            this.currentPage++;
            this.getProjects();
        },
        prevPage() {
            this.currentPage--;
            this.getProjects();
        },
    },
    created() {
        this.getProjects();
    },
}
</script>
<template>
    <main>
        <div class="container py-5">
            <h1>My Projects</h1>
            <div v-if="loading">
                <div class="spinner-border mx-2" style="width: 3rem; height: 3rem; color:rgb(243, 120, 6)" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow" style="width: 3rem; height: 3rem; color:rgb(3, 3, 58)" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div class="row mt-5" v-else>
                <div class="col col-md-4 g-3" v-for="project in projects">
                    <ProjectCard :project="project" />
                </div>
                <nav class="my-5">
                    <ul class="list-unstyled d-flex justify-content-between">
                        <li>
                            <button class="btn btn-primary" @click="prevPage">Previous</button>
                        </li>
                        <li>
                            <button class="btn btn-primary" @click="nextPage">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </main>
</template>
<style scoped></style>