<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'ProjectDetail',
    data() {
        return {
            store,
            loading: false,
            project: {},
        };
    },
    methods: {
        getProject() {
            this.loading = true;
            axios.get(this.store.api.baseUrl + this.store.api.apiUrl.projects + '/' + this.$route.params.slug).then((response) => {
                console.log(response.data.result);

                if (response.data.result) {
                    this.project = response.data.result;
                } else {
                    this.loading = false;
                    this.$router.push({ path: '/project-not-found' });
                }
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.loading = false;
            });
        },
    },
    created() {
        console.log(this.$route);
        this.getProject();
    },
}
</script>
<template>
    <section>
        <div class="container p-5">
            <img v-if="project.project_image" :src="this.store.api.baseUrl + this.store.api.storagePath + project.project_image" :alt="project.title" class="card-img-top" />
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            <p v-if="project.type">Type: {{ project.type.title }}</p>
            <div class="d-flex justify-content-between">
                <button class="btn btn-primary my-5"><router-link :to="{ name: 'home' }"
                        class="link-light link-underline-opacity-0">Go Back to Home Page</router-link>
                </button>
                <button class="btn btn-info my-5"><router-link :to="{ name: 'projects',  query: { page: store.projects.currentPage, key: store.projects.searchKey }, }"
                        class="link-light link-underline-opacity-0">Go Back to Projects</router-link>
                </button>
            </div>

        </div>
    </section>
</template>
<style scoped></style>