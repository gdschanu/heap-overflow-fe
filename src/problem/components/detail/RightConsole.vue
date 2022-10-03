<template>
    <div class="problem-console">
        <div class="console-window" v-show="showConsole">
            <TabBar :tabBarList="['Test case', 'Run code', 'Submission']" class="tab-bar" :selected="tabBarSelected"
                @selectUpdated="(value) => { tabBarSelected = value; }">
                <template v-slot:Testcase>
                    <TestCase :testCases="testCases" />
                </template>
                <template v-slot:Runcode>
                    <RunCode :runCodeResult="{}" />
                </template>
                <template v-slot:Submission>
                    <Submission :submission="currentSubmission" :is-judging="isJudging" />
                </template>
                <template v-slot:Testcase-icon>
                    <i class="fa-solid fa-gear"></i>
                </template>
                <template v-slot:Runcode-icon>
                    <i class="fa-brands fa-codepen"></i>
                </template>
                <template v-slot:Submission-icon>
                    <i class="fa-solid fa-square-check"></i>
                </template>
            </TabBar>
        </div>
        <div class="console-button" @click="showConsole = !showConsole">
            <span>Console</span>
            <span :class="showConsole ? 'icon flipped' : 'icon'">
                <i class="fa-solid fa-chevron-up"></i>
            </span>
        </div>
        <Button @clicked="handleRunCode" class="button" text="Run Code" type="secondary" />
        <Button @clicked="handleSubmit" class="button" text="Submit Code" :loading="isSubmitting"/>
    </div>
</template>

<script lang="ts" setup>

import TabBar from "./ProblemTabBar.vue";
import TestCase from "./RightConsoleTestCase.vue";
import TestCaseModel from "@/problem/model/testCase";
import SubmissionModel from "../../model/submission"
import RunCode from "./RightConsoleRunCode.vue";
import Submission from "./RightConsoleSubmission.vue";
import Button from "../../components/common/Button.vue";
import Problem from "@/problem/model/problem";
import { computed, nextTick, onMounted, ref, Ref, watch } from "vue";
import { getTestCasesById } from "../../model/domainLogic/testCase"
import errorHandler from "@/shared/helpers/errorHandler";
import { getSubmissionById, submit } from "@/problem/model/domainLogic/submission";
import { AxiosError } from "axios";
import { useStore } from "vuex";
import { ProblemCode, EditorSetting } from '../../store'

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const currentSubmission = computed(() => store.state.problemStore.submission) as Ref<SubmissionModel>
const currentProblemCode = computed(() => store.state.problemStore.currentProblemCode) as Ref<ProblemCode>
const editorSettings = computed(() => store.state.problemStore.editorSettings) as Ref<EditorSetting>

const isSubmitting = ref(false)
const isRunning = ref(false)
const isJudging = ref(false)
const showConsole = ref(false)
const tabBarSelected = ref(0)
const testCases = ref()

function showSubmissionTab() {
    showConsole.value = true
    tabBarSelected.value = 2
}

onMounted(async () => {
    try {
        testCases.value = await getTestCasesById(problem.value.getId())
        
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

function handleRunCode() {
    console.log('running code ...');
}

async function handleSubmit() {
    try {
        isSubmitting.value = true
        let submissionId = await submit(problem.value, currentProblemCode.value.code, editorSettings.value.language)
        showSubmissionTab()
        isSubmitting.value = false
        store.dispatch('problemStore/setRunningSubmissionId', submissionId)
        await nextTick()
        isJudging.value = true
    } catch (error) {
        isSubmitting.value = false
        errorHandler(error as AxiosError)
    }
}

watch(currentSubmission, () => {
    showSubmissionTab()
    isJudging.value = false
})

</script>

<style lang="scss" scoped>
.problem-console {
    position: relative;
    display: flex;
    align-items: center;

    .console-window {
        position: absolute;
        bottom: var(--nav-height);
        left: -2px;
        right: -2px;
        height: calc(60vh);
        overflow: hidden;
        border: 2px solid #9288c1;
        background-color: white;
        border-bottom: none;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .console-button {
        width: fit-content;
        margin-right: auto;
        margin-left: 10px;
        padding: 8px;
        display: flex;
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;

        .icon {
            margin-left: 10px;
            display: flex;
            align-items: center;
            transform: rotate(180deg);
            transition: 0.3s;
        }

        .flipped {
            transform: rotate(0deg);
        }
    }

    .button {
        margin-right: 10px;
    }
}
</style>