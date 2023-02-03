<template>
    <div class="p-5" v-if="reload">
        <NewPost @post-created="handleReloadPaging()"/>
        <Paging />
    </div>
</template>

<script lang="ts" setup>
import { getPosts } from '@/problem/model/domainLogic/post';
import Post from '@/problem/model/post';
import Problem from '@/problem/model/problem';
import { computed } from '@vue/reactivity';
import { onMounted, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import Paging from './Paging.vue';
import NewPost from './newPost.vue';

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const reload = ref(true)

function handleReloadPaging() {
    reload.value = false
    setTimeout(() => {
        reload.value = true
    }, 0)
}

</script>

<style lang="scss" scoped>
</style>