<template>
    <div class="list-item-vote">
        <div
            class="list-item-vote__arrow-up"
            :class="upvote ? 'list-item-vote__upvote' : ''"
            @click="upvoteClicked()"
        >
            <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div
            class="list-item-vote__count" 
            :class="upvote ? 'list-item-vote__upvote' : downvote ? 'list-item-vote__downvote' : ''"
        >
            {{calculateVote}}
        </div>
        <div
            class="list-item-vote__arrow-down"
            :class="downvote ? 'list-item-vote__downvote' : ''"
            @click="downvoteClicked()"
        >
            <i class="fa-solid fa-arrow-down"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const upvote = ref(false)
const downvote = ref(false)
const vote = ref(Math.round(Math.random()*100))

function upvoteClicked() {
    if (upvote.value) upvote.value = false;
    else {
        upvote.value = true;
        downvote.value = false;
    }
}

function downvoteClicked() {
    if (downvote.value) downvote.value = false;
    else {
        downvote.value = true;
        upvote.value = false;
    }
}

const calculateVote = computed(() => {
    if (upvote.value) {
        return vote.value + 1
    }
    if (downvote.value) {
        return vote.value - 1
    }
    return vote.value
})
</script>

<style lang="scss" scoped>
.list-item-vote {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-size: 20px;

    &__arrow-up {
        cursor: pointer;
    }

    &__count {
        
    }

    &__arrow-down {
        cursor: pointer;
        
    }

    &__downvote {
        color: red;
    }

    &__upvote {
        color: green;
    }
}
</style>