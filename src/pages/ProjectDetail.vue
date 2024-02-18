<script>
import axios from 'axios';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            project: {},
            'baseUrl': 'http://127.0.0.1:8000',
            'apiUrl': {
                'projects': '/api/projects',
            },
        };
    },
    methods: {
        getProject() {
            axios.get(this.baseUrl + this.apiUrl.projects + '/' + this.$route.params.slug).then((response) => {
                this.project = response.data.results;
            }).catch((error) => {
                console.log(error)
            });
        },
    },
    created() {
        // console.log(this.$route);
        this.getProject();
    }
}
</script>
<template>
    <section>
        <div class="container p-5">
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            <p v-if="project.type">Type: {{ project.type.title }}</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary my-5"><router-link :to="{ name: 'home' }"
                        class="link-light link-underline-opacity-0">Go Back to Home Page</router-link>
                </button>
                <button class="btn btn-info my-5"><router-link :to="{ name: 'projects' }"
                        class="link-light link-underline-opacity-0">Go Back to Projects</router-link>
                </button>
            </div>

        </div>
    </section>
</template>
<style scoped></style>