import VueRouter from 'vue-router';
import mainPage from '@/layouts/mainPage'
import editNote from "@/layouts/editNote";


const routes = [
    { path: '/', component: mainPage },
    { path: '/edit/:id', component: editNote },
];

const index = new VueRouter({
    mode: 'history', /* For deploy to github pages use mode: 'hash'. This is my first deploy */
    routes,
});

export default index;
