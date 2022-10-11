<template>
    <div class="list">
        <ListItem
            v-for="post in posts"
            :post="post"
        />
    </div>
</template>

<script lang="ts" setup>
import Post from '@/problem/model/post';
import Problem from '@/problem/model/problem';
import { computed } from '@vue/reactivity';
import { PropType, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import ListItem from './ListItem.vue';

const props = defineProps({
    posts: {
        type: Array as PropType<Array<Post>>,
        required: true
    }
})

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
</script>

<style lang="scss" scoped>

</style>