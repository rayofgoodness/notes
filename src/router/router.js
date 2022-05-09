import VueRouter from 'vue-router';
import mainPage from '@/layouts/mainPage'
import editPage from "@/layouts/editPage";


const routes = [
    { path: '/', component: mainPage },
    { path: '/edit', component: editPage },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
