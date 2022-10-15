<template>
    <div class="paging">
        <template v-if="posts.length === 0">
            <div class="paging__no-posts">
                These's no discussion in this problem
            </div>
        </template>
        <template v-else>
            <List :posts="posts" />
            <Navigation
                :current-page="currentPage"
                :max-page="maxPage"
                @pageChanged="async (newPage: number) => await showPage(newPage)"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { countPosts, getPosts } from '@/problem/model/domainLogic/post';
import Post from '@/problem/model/post';
import Problem from '@/problem/model/problem';
import errorHandler from '@/shared/helpers/errorHandler';
import { computed } from '@vue/reactivity';
import { AxiosError } from 'axios';
import { onMounted, PropType, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import List from './List.vue';
import Navigation from './Navigation.vue';

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const currentPage = ref(1)
const maxPage = ref(1)
const perPage = ref(10)
const posts = ref([]) as Ref<Post[]>

onMounted(async () => {
    try {
        maxPage.value = Math.ceil((await countPosts(problem.value.getId())) / perPage.value);
        await showPage(1)
    } catch (error) {
        errorHandler(error as AxiosError)   
    }
})

async function showPage(page: number) {
    currentPage.value = page
    posts.value = []
    posts.value = await getPosts(currentPage.value - 1, perPage.value, problem.value.getId())
}

</script>

<style lang="scss" scoped>
    
</style>