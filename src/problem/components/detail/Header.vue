<template>
    <div class="problem-header">
        <div class="back" @click="pushToProblem">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <h4 class="problem-name">{{ problem.getName() }}</h4>
        <div class="problem-info">
            <div :class="'difficulty ' + problem.getDifficulty()">
                {{ $store.state.problemStore.problem.getDifficulty() }}
            </div>
            <div class="like" @click="likeClicked">
                {{ like ? likeCount + 1 : likeCount }}
                <i :class="(like ? 'fa-solid' : 'fa-regular') + ' fa-thumbs-up'"></i>
            </div>
            <div class="dislike" @click="dislikeClicked">
                {{ dislike ? dislikeCount + 1 : dislikeCount }}
                <i :class="(dislike ? 'fa-solid' : 'fa-regular') + ' fa-thumbs-down'"></i>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Problem from '../../model/problem';
import errorHandler from '@/shared/helpers/errorHandler';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>

const like = ref(false)
const likeCount = ref(0)
const dislike = ref(false)
const dislikeCount = ref(0)

function pushToProblem() {
    router.push("/problem");
}

function likeClicked() {
    if (like.value) like.value = false;
    else {
        like.value = true;
        dislike.value = false;
    }
}

function dislikeClicked() {
    if (dislike.value) dislike.value = false;
    else {
        dislike.value = true;
        like.value = false;
    }
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
        @apply absolute right-0 flex rounded-xl;
        border: 1px solid #9288c1;

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
        border-right: 1px solid #9288c1;
    }
}
</style>