import { reactive } from 'vue';

const store = reactive({
    api: {
        storagePath: '/storage/',
        baseUrl: 'http://127.0.0.1:8001',
        apiUrl: {
            projects: '/api/projects',
        },
    },
    projects: {
        currentPage: 1,
        searchKey: null,
    },
});

export default store;