import VueRouter from 'vue-router';
import mainPage from '@/layouts/mainPage'
import editNote from "@/layouts/editNote";


const routes = [
    { path: '/', component: mainPage },
    { path: '/edit/:id', component: editNote },
];

const index = new VueRouter({
    mode: 'history', //for deploy to github pages use mode: 'hash'
    routes,
});

export default index;
