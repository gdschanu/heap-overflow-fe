<template>
    <div class="problem-header">
        <div class="back" @click="pushToProblem">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <h2 class="problem-name">{{ problem.getName() }}</h2>
        <div class="problem-info">
            <!-- <div :class="'difficulty ' + practiceProblem.getDifficulty()">
                {{ translate(practiceProblem.getDifficulty()).toUpperCase() }}
            </div> -->
            <div class="like" @click="likeClicked">
                {{ like ? likeCount + 1 : likeCount }}
                <i
                    :class="
                        (like ? 'fa-solid' : 'fa-regular') + ' fa-thumbs-up'
                    "
                ></i>
            </div>
            <div class="dislike" @click="dislikeClicked">
                {{ dislike ? dislikeCount + 1 : dislikeCount }}
                <i
                    :class="
                        (dislike ? 'fa-solid' : 'fa-regular') +
                        ' fa-thumbs-down'
                    "
                ></i>
            </div>
        </div>
    </div>
</template>

<script>

import translate from "../../../helpers/translate";
import errorHandler from "../../../helpers/errorHandler";

export default {
    name: "ProblemHeader",
    data() {
        return {
            like: false,
            likeCount: 0,
            dislike: false,
            dislikeCount: 0,
            practiceProblem: {}
        };
    },
    props: {
        problem: Object,
    },
    methods: {
        pushToProblem() {
            this.$router.push("/problem");
        },
        likeClicked() {
            if (this.like) this.like = false;
            else {
                this.like = true;
                this.dislike = false;
            }
        },
        dislikeClicked() {
            if (this.dislike) this.dislike = false;
            else {
                this.dislike = true;
                this.like = false;
            }
        },
        translate(input) {
            return translate(input);
        },
    },
    async created() {
        try {
            this.practiceProblem = practiceProblem;
            this.like = 0;
            this.dislike = 0;
        } catch (error) {
            errorHandler(error);
        }
    },
};
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
    .problem-info > * {
        @apply text-center flex-1 p-1 cursor-pointer;
    }
    .problem-info > *:not(:last-child) {
        @apply border-r border-slate-900 dark:border-slate-100;
    }
}
</style>