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
            projects: [],
            'baseUrl': 'http://127.0.0.1:8000',
            'apiUrl': {
                'projects': '/api/projects',
            },
        };
    },
    methods: {
        getProjects() {
            axios.get(this.baseUrl + this.apiUrl.projects).then((response) => {
                this.projects = response.data.data;
            }).catch(error => {
                console.log(error);
            });
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
        </div>
    </main>
</template>
<style scoped></style>