<template>
    <div class="problem-header">
        <div class="back" @click="pushToProblem">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <h4 class="problem-name">{{ problem.getName() }}</h4>
        <div class="ml-auto">
            <ActionBar />
        </div>
    </div>
</template>

<script lang="ts" setup>
import ActionBar from '@/shared/components/common/actionBar/ActionBar.vue';
import Problem from '../../model/problem';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>

function pushToProblem() {
    router.push("/problem");
}

</script>

<style lang="scss" scoped>
.problem-header {
    @apply relative flex items-center p-0;

    .back {
        @apply cursor-pointer ml-3;
    }

    .problem-name {
        @apply ml-3 font-bold;
    }

    .problem-info {
        @apply absolute right-0 flex rounded-xl border border-slate-300;

        .EASY {
            color: rgb(43, 223, 43);
        }

        .MEDIUM {
            color: rgb(167, 167, 167);
        }

        .HARD {
            color: rgb(255, 70, 70);
        }
    }

    .problem-info>* {
        @apply text-center flex-1 px-4 py-1 cursor-pointer;
    }

    .problem-info>*:not(:last-child) {
        @apply border-r border-slate-300;
    }
}
</style>