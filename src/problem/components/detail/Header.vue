<template>
    <div class="problem-header">
        <div class="back" @click="pushToProblem">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <h4 class="problem-name">{{ problem.getName() }}</h4>
        <div class="problem-info">
            <div :class="'difficulty ' + problem.getDifficulty()">
                {{ problem.getDifficulty() }}
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const like = ref(false)
const likeCount = ref(0)
const dislike = ref(false)
const dislikeCount = ref(0)

const props = defineProps({
    problem: {
        type: Problem,
        required: true
    },
})

function pushToProblem() {
    router.push("/problem");
}

function likeClicked() {
    if (like.value) like.value = false;
    else {/*  */
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
        @apply ml-3;
    }

    .problem-info {
        @apply absolute right-0 border flex rounded-xl w-1/3 border-slate-900 dark:border-slate-100;

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
        @apply text-center flex-1 p-1 cursor-pointer;
    }

    .problem-info>*:not(:last-child) {
        @apply border-r border-slate-900 dark:border-slate-100;
    }
}
</style>