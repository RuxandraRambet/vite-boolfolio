<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'Main',
    props: ['projects'],
    components: {
        ProjectCard
    }
};
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