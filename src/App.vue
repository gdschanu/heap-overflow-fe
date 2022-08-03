<template>
    <div id="main">
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import routerWatcher from "./shared/helpers/routerWatcher";
import themeSetup from "./shared/helpers/themeSetup";
// router
const route = useRoute();
const router = useRouter();

watch(route, (to, from) => {
    routerWatcher(to, from)
});

// theme
themeSetup()




</script>


<style lang="scss">
</style>
