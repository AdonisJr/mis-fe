<template>
    <main class="w-screen h-screen flex justify-center items-center bg-slate-100">
        <form class="flex flex-col gap-4 md:w-[350px] rounded-md shadow-md p-4 bg-white text-md" @submit.prevent="login">
            <div class="flex flex-col justify-center items-center">
                <img :src="`${app_url}/logo.png`" class="w-32" />
                <p class="text-xl text-slate-600">Login here</p>
            </div>
            <input class="py-1 px-2 border-2 border-slate-200" type="email" v-model="user_details.email" placeholder="Email" />
            <input class="py-1 px-2 border-2 border-slate-200" type="password" v-model="user_details.password" placeholder="Password" />
            <div class="flex justify-center text-xs font-bold">
                <a href="/forgot_password"
                    class="cursor-pointer hover:underline hover:text-blue-500 duration-200">Forgot Password?</a>
            </div>
            <button class="bg-teal-500 text-white rounded-lg py-1 px-2">Sign In</button>
            <div class="flex justify-center text-xs">
                <p clpss="font-normal">No account yet?
                    <a href="/register"
                        class="font-semibold hover:underline duration-200 cursor-pointer hover:text-blue-500">Register
                    </a>
                </p>
            </div>
        </form>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast();

const app_url = import.meta.env.VITE_API_BASE_URL;

const user_details = ref({
    email: '',
    password: ''
})

const login = async () => {
    toast.success('Successfully login')
}

</script>