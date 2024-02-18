<script>
export default {
    name: 'NotFound'
}
</script>
<template>
    <section>
        <div class="container p-5 text-center">
            <h1>Page Not Found</h1>
            <button class="btn btn-info my-5"><router-link :to="{ name: 'home' }" class="link-light link-underline-opacity-0">Go Back to Home Page</router-link></button>
        </div>
    </section>
</template>
<style scoped>

</style>