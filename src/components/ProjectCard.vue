<script>
export default {
    name: 'ProjectCard',
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
    <div class="card">
        <img v-if="project.project_image" src="..." class="card-img-top" alt="...">
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