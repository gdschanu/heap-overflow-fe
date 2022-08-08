<template>
    <div class="problem-detail">
        <Loading v-if="firstLoading" />
        <ProblemNotFound v-if="problemNotFound" />
        <div class="content" v-if="!firstLoading && !problemNotFound">
            <div class="header" v-show="!fullScreen">
                <Header :problem="problem" />
            </div>
            <div class="left" v-show="!fullScreen">
                <Left :problem="problem" />
            </div>
            <div :class="fullScreen ? 'right right-full-screen' : 'right'">
                <Right
                    :fullScreen="fullScreen"
                    :problem="problem"
                    @enterFullScreen="fullScreen = true"
                    @exitFullScreen="fullScreen = false"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Header from "./Header.vue"
import Left from './Left.vue'
import Right from "./Right.vue"
import ProblemNotFound from "./ProblemNotFound.vue"
import Loading from "../common/Loading.vue"
import { reactive, Ref, ref } from "@vue/reactivity"
import { getProblemById } from "../../model/domainLogic/problem"
import errorHandler from "@/shared/helpers/errorHandler"
import { AxiosError } from "axios";
import { useRoute, useRouter } from "vue-router"
import { onMounted } from "vue";
import Problem from "../../model/problem"
import Difficulty from "../../model/difficulty"
import { useStore } from "vuex"

const route = useRoute()
const store = useStore()
const current = typeof route.params.id === 'string' ? route.params.id : ''

const firstLoading = ref(true)
const problemNotFound = ref(false)
const fullScreen = ref(false)
const problem: Ref<Problem> = ref(new Problem(current, '', '', '', Difficulty.EASY))

onMounted(async () => {
    try {
        await initProblem()
        restoreCode()
        editorSettings()
        firstLoading.value = false
    } catch (error) {
        const err = error as AxiosError
        errorHandler(err)
        problemNotFound.value = true
        firstLoading.value = false
    }
})

async function initProblem() {
    problem.value = await getProblemById(current)
}

function restoreCode() {
    const currentCode = localStorage.getItem("problemID: " + problem.value.getId())
    if (currentCode !== null)
        store.dispatch("problemStore/setCurrentProblemCode", {
            id: problem.value.getId(),
            code: JSON.parse(currentCode)["code"],
        });
    else
        store.dispatch("problemStore/setCurrentProblemCode", {
            id: problem.value.getId(),
            code: "",
        });
}

function editorSettings() {
    const defaultSettings = {
        fontSize: "15px",
        fontFamily: "monospace", //[Times New Roman | monospace | Courier New | Papyrus | Georgia | Trebuchet MS | Tahoma]
        fontWeight: "normal", //[normal | bold]
        lineHeight: 20,
        // other
        wordWrap: false,
        lineNumbers: true,
        // no change
        scrollBeyondLastLine: true,
        folding: true,
        foldingHighlight: true,
        tabCompletion: "on",
        automaticLayout: true,
        cursorBlinking: "phase", // [blink | smooth | phase | solid | expand]
        // not an option
        language: problem.value.getAllowedProgrammingLanguages()[0],
    };
    const currentSetting = localStorage.getItem("editorSettings")

    if (currentSetting !== null) {
        let currentSettings = JSON.parse(currentSetting)
        store.dispatch("problemStore/setEditorSettings", currentSettings);
    } else {
        store.dispatch("problemStore/setEditorSettings", defaultSettings);
    }

    setTimeout(() => {
        store.dispatch("problemStore/setEditorSettings", {
            folding: false
        });
    }, 1000);
}

</script>
<style lang="scss" scoped>
$left-width: 40%;
$gap: 15px;

.problem-detail {
    @apply fixed w-full h-full top-0 left-0;

    .content {
        @apply grid w-full h-full;
        grid-template-areas: "header header""left right";
        grid-template-columns: min-content;
        grid-template-rows: min-content;
        gap: $gap;
        padding: $gap;

        .header {
            grid-area: header;
            @apply relative;
        }

        .left {
            grid-area: left;
            width: 40vw;
            @apply relative resize-x overflow-hidden rounded-xl border border-slate-900 dark:border-none;
        }

        .right {
            grid-area: right;
            @apply relative overflow-hidden rounded-xl border border-slate-900 dark:border-none;
        }

        .right-full-screen {
            @apply fixed inset-0 rounded-none;
        }
    }

    --nav-height: 60px;
}
</style>