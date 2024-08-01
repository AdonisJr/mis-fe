<template>
    <main class="flex w-screen h-screen overflow-hidden">
        <Sidebar />
        <div class="flex flex-col px-5">
            <Navbar />
            <router-view></router-view>
        </div>
    </main>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
import { useUserStore } from '../stores/user';

</script>