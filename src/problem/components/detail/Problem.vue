<template>
  <div class="problem-detail">
    <Loading v-if="firstLoading" />
    <ProblemNotFound v-if="problemNotFound" />
    <div class="content" v-if="!firstLoading && !problemNotFound">
      <div class="header" v-show="!fullScreen">
        <Header />
      </div>
      <div class="left" v-show="!fullScreen">
        <Left />
      </div>
      <div :class="fullScreen ? 'right right-full-screen' : 'right'">
        <Right
          :fullScreen="fullScreen"
          @enterFullScreen="fullScreen = true"
          @exitFullScreen="fullScreen = false"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue";
import Left from "./Left.vue";
import Right from "./Right.vue";
import ProblemNotFound from "./ProblemNotFound.vue";
import Loading from "../common/Loading.vue";
import { reactive, Ref, ref } from "@vue/reactivity";
import { getProblemById } from "../../model/domainLogic/problem";
import errorHandler from "@/shared/helpers/errorHandler";
import { AxiosError } from "axios";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";
import { useStore } from "vuex";
import Problem from "@/problem/model/problem";
import ProgrammingLanguage from "@/problem/model/programmingLanguage";

const route = useRoute();
const store = useStore();
const current = typeof route.params.id === "string" ? route.params.id : "";

const firstLoading = ref(true);
const problemNotFound = ref(false);
const fullScreen = ref(false);
const problem = ref() as Ref<Problem>;

onMounted(async () => {
  try {
    await initProblem();
    restoreCode();
    editorSettings();
    firstLoading.value = false;
  } catch (error) {
    const err = error as AxiosError;
    errorHandler(err);
    problemNotFound.value = true;
    firstLoading.value = false;
  }
});

async function initProblem() {
  problem.value = await getProblemById(current);
  store.dispatch("problemStore/setProblem", await getProblemById(current));
}

function restoreCode() {
  const currentCode = localStorage.getItem(
    "problemID: " + store.state.problemStore.problem.getId()
  );
  if (currentCode !== null)
    store.dispatch("problemStore/setCurrentProblemCode", {
      id: store.state.problemStore.problem.getId(),
      codes: JSON.parse(currentCode)["codes"],
    });
  else
    store.dispatch("problemStore/setCurrentProblemCode", {
      id: store.state.problemStore.problem.getId(),
      codes: {
        [problem.value.getAllowedProgrammingLanguages()[0]]: ""
      },
    });
}

function editorSettings() {
  const defaultSettings = {
    fontSize: "15px",
    fontFamily: "monospace",
    fontWeight: "normal",
    lineHeight: 20,
    wordWrap: false,
    lineNumbers: true,
    scrollBeyondLastLine: true,
    folding: true,
    foldingHighlight: true,
    tabCompletion: "on",
    automaticLayout: true,
    cursorBlinking: "phase",
    language: problem.value.getAllowedProgrammingLanguages()[0],
  };
  const currentSetting = localStorage.getItem("editorSettings");

  if (currentSetting !== null) {
    let currentSettings = JSON.parse(currentSetting);
    if (!problem.value.getAllowedProgrammingLanguages().includes(currentSettings.language))
      currentSettings.language = problem.value.getAllowedProgrammingLanguages()[0]
    store.dispatch("problemStore/setEditorSettings", currentSettings);
  } else {
    store.dispatch("problemStore/setEditorSettings", defaultSettings);
  }
}
</script>
<style lang="scss" scoped>
$left-width: 48vw;
$gap: 15px;

.problem-detail {
  @apply fixed w-full h-full top-0 left-0;

  .content {
    @apply grid w-full h-full;
    grid-template-areas: "header header" "left right";
    grid-template-columns: min-content;
    grid-template-rows: min-content;
    gap: $gap;
    padding: $gap;

    .header {
      grid-area: header;
      @apply relative;
    }

    .left {
      @apply relative resize-x overflow-hidden rounded-xl border border-slate-300
      dark:border-none dark:bg-slate-900;
      grid-area: left;
      width: $left-width;
    }

    .right {
      grid-area: right;
      @apply relative overflow-hidden rounded-xl border border-slate-300
      dark:border-none dark:bg-slate-900;
    }

    .right-full-screen {
      @apply fixed inset-0 rounded-none;
    }
  }

  --nav-height: 60px;
}
</style>
