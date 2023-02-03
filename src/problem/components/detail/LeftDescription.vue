<template>
  <div>
    <MarkdownRender
      :description="problem.getDescription()"
      class="problem-description"
    >
      <div class="flex mb-3 gap-3 items-center">
        <div
          :class="`px-2 py-1 rounded-full ${
            difficultyClass[problem.getDifficulty()]
          }`"
        >
          {{ difficultyName[problem.getDifficulty()] }}
        </div>
        <div v-if="problem.getStatus() === ProblemStatus.DONE" class="">
          <el-tooltip content="This problem is done">
            <i class="fa-regular fa-circle-check"></i>
          </el-tooltip>
        </div>
        <div class="flex items-center gap-3">
          <div
            :class="`cursor-pointer ${
              like ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500'
            }`"
            @click="likeClicked"
          >
            {{ like ? likeCount + 1 : likeCount }}
            <i
              :class="(like ? 'fa-solid' : 'fa-regular') + ' fa-thumbs-up'"
            ></i>
          </div>
          <div
            :class="`cursor-pointer ${
              dislike ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500'
            }`"
            @click="dislikeClicked"
          >
            {{ dislike ? dislikeCount + 1 : dislikeCount }}
            <i
              :class="(dislike ? 'fa-solid' : 'fa-regular') + ' fa-thumbs-down'"
            ></i>
          </div>
        </div>
        <div>
          <el-tag
            v-for="tag in problem.getTags()"
            :key="tag"
            class="bg-sky-100 border-sky-200 dark:bg-sky-900 dark:border-sky-800"
          >
            {{ tag }}
          </el-tag>
        </div>
      </div>
    </MarkdownRender>
  </div>
</template>

<script lang="ts" setup>
import MarkdownRender from "@/shared/components/general/MarkdownRender.vue";
import Problem from "@/problem/model/problem";
import { computed, Ref, ref } from "vue";
import { useStore } from "vuex";
import Difficulty from "@/problem/model/difficulty";
import { ProblemStatus } from "@/problem/model/problemStatus";
import { ElTooltip, ElTag } from "element-plus";

const store = useStore();
const problem = computed(
  () => store.state.problemStore.problem
) as Ref<Problem>;

const difficultyClass = {
  [Difficulty.EASY]: "bg-green-600 text-green-200",
  [Difficulty.MEDIUM]: "bg-gray-600 text-gray-200",
  [Difficulty.HARD]: "bg-red-600 text-red-200",
};

const difficultyName = {
  [Difficulty.EASY]: "Easy",
  [Difficulty.MEDIUM]: "Medium",
  [Difficulty.HARD]: "Hard",
};

const like = ref(false);
const likeCount = ref(0);
const dislike = ref(false);
const dislikeCount = ref(0);

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

<style scoped></style>
