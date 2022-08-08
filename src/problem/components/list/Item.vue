<template>
    <tr class="item" @click="gotoProblemDetail">
        <td :title="String(tableId)">{{tableId}}</td>
        <td :title="name">{{name}}</td>
        <td :title="difficulty">{{difficulty}}</td>
    </tr>
</template>

<script lang="ts" setup>
import Difficulty from '@/problem/model/difficulty';
import { PropType } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
    tableId: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String as PropType<Difficulty>,
        required: true
    }
})

const router = useRouter()

function gotoProblemDetail() {
    router.push('/problem/' + props.id)
}

</script>

<style lang="scss" scoped>
.item {
    td {
        @apply text-center whitespace-nowrap truncate p-2 border-y border-black cursor-pointer;
    }
    td:first-child {
        @apply rounded-l-lg border-l;
    }
    td:last-child {
        @apply rounded-r-lg border-r;
    }
}
</style>