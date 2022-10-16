<template>
    <div class="nav-layout">
        <div class="nav-container">
            <div class="nav">
                <router-link to="/">
                    <div class="nav__header">
                        <div class="nav__header__img-container">
                            <img src="https://cdn.dribbble.com/users/2328616/screenshots/12472594/media/b1fc462905004066ffd045edf0890478.png?compress=1&resize=400x300&vertical=top" alt="logo">
                        </div>
                        <h5 class="nav__header__title">Heap Overflow</h5>
                    </div>
                </router-link>
                <div class="nav__route">
                    <router-link v-for="(route, index) in routeList" :to="route.path" :key="index"
                        class="nav__route__item">
                        <i :class="route.icon" class="nav__route__item__icon"></i>
                        <span class="nav__route__item__name">{{ route.name }}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const routeList = ref([
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "fa-solid fa-house",
    },
    {
        path: "/problem",
        name: "Problem",
        icon: "fa-solid fa-computer",
    },
    {
        path: "/contest",
        name: "Contest",
        icon: "fa-brands fa-free-code-camp",
    },
    {
        path: "/userProfile",
        name: "Profile",
        icon: "fa-solid fa-gear",
    },
    {
        path: "/discussion",
        name: "Discussion",
        icon: "fa-solid fa-comment",
    },
    {
        path: "/ranking",
        name: "Ranking",
        icon: "fa-solid fa-ranking-star",
    },
    {
        path: "/help",
        name: "Help",
        icon: "fa-solid fa-circle-question",
    },
])
</script>

<style lang="scss" scoped>
.nav-layout {
    @apply flex items-stretch;
}

.nav-container {
    @apply relative lg:pr-4;

    .nav {
        @apply sticky top-0 w-16 lg:w-52;

        &__header {
            @apply flex justify-center items-center py-2 h-20;

            img {
                @apply block w-20;
            }

            &__title {
                @apply font-medium hidden lg:block;
            }
        }

        &__route {
            &__item {
                @apply relative flex items-center py-3 pl-3 text-slate-500 hover:text-slate-600 active:text-slate-700;

                &__icon {
                    @apply mx-3;
                }

                &__name {
                    @apply mx-3 hidden lg:block;
                }
                color: #57489c
            }
            &__item.router-link-active {
                @apply text-slate-900 font-bold;
            }

            &__item.router-link-active::after {
                @apply absolute bg-slate-900 left-0 top-1 bottom-1 w-1 rounded-r;
                content: "";
            }
        }
    }
}

.content-container {
    @apply flex-auto;
}
</style>