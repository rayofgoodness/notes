import VueRouter from 'vue-router';
import mainPage from '@/layouts/mainPage'
import editNote from "@/layouts/editNote";


const routes = [
    { path: '/', component: mainPage },
    { path: '/edit/:id', component: editNote },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
