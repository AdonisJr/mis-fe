import { createRouter, createWebHistory } from "vue-router";
import BlankPanelLayout from './components/layout/BlankPanel.vue';
import AdminPanelLayout from './components/layout/AdminPanel.vue';
import Login from './components/views/Login.vue';
import Admin from './components/views/Admin.vue';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/',
        component: BlankPanelLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            }
        ]
    },
    {
        path: '/',
        component: BlankPanelLayout,
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Login // Home 
            }
        ]
    },
    {
        path: '/admin',
        component: AdminPanelLayout,
        children: [
            {
                path: '/admin',
                name: 'Home',
                component: Admin // Home 
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Function for checking the user if already logged in
// router.beforeEach(async (to, from, next) =>{
//     const accessToken = getToken('auth');
//     const publicPaths = ['/login', '/register', '/forgot_password', '/reset_password'];

//     if(accessToken){
//         const userStore = useUserStore();
//         const user = userStore.getUser();
//         if(!user){
//             userStore.setUser(await fetchUserDetails()) //set user on store/pinia
//         }
//         if(to.path === '/login'){
//             next('/home')
//         }else{
//             next();
//         }
//     }else{
//         if(publicPaths.some(path => to.path.startsWith(path))){
//             next();
//         }else{
//             next('/login');
//         }
//     }
// })

export default router;