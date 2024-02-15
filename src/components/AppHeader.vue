<script>
export default {
    name: 'Header',
}
</script>

<template>
    <header class="p-4 text-white">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="logo-container">
                <img src="" alt="">IMG
            </div>
            <nav>
                <ul class="list-unstyled d-flex gap-2">
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
}
</style>