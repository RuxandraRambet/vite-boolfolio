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
            axios.get(this.baseUrl + this.apiUrl.projects, {
                params: {
                    page: this.currentPage,
                },
            }).then((response) => {
                this.projects = response.data.results.data;
            }).catch(error => {
                console.log(error);
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
            <div class="row mt-5">
                <div class="col col-md-4 g-3" v-for="project in projects">
                   <ProjectCard :project="project" />
                </div>
            </div>
            <nav class="my-5">
                <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                        <button class="btn btn-primary" @click="prevPage">Previous</button>
                    </li>
                    <li>
                        <button  class="btn btn-primary" @click="nextPage">Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    </main>
</template>
<style scoped></style>