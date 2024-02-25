<script>
import store from '../store';
export default {
    name: 'ProjectCard',
    data() {
        return {
            store,
        };
    },
    props: {
        project: Object,
    },
    computed: {
        projectDescription() {
            return this.project.description?.substring(0, 100) + "...";
        },
    },

};
</script>

<template>
    <div class="card h-100">
        <img v-if="project.project_image" :src="this.store.api.baseUrl + this.store.api.storagePath + project.project_image" class="card-img-top" alt="project.title">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ projectDescription }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: project.slug} }" class="btn btn-primary">
                View Details
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>