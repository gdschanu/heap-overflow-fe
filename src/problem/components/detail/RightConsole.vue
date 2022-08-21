<template>
    <div class="problem-console">
        <div class="console-window" v-show="showConsole">
            <TabBar :tabBarList="['Test case', 'Run code', 'Submission']" class="tab-bar" :selected="consoleSelected"
                @selectUpdated="(value) => { consoleSelected = value; }">
                <template v-slot:Testcase>
                    <TestCase :testCases="testCases" />
                </template>
                <template v-slot:Runcode>
                    <RunCode :runCodeResult="{}" />
                </template>
                <template v-slot:Submission>
                    <Submission :submission="currentSubmission" />
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
        <Button @clicked="runCode" class="button" text="Run Code" />
        <Button @clicked="submit" class="button" text="Submit Code" />
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
import { computed, onMounted, ref, Ref } from "vue";
import { getTestCasesById } from "../../model/domainLogic/testCase"
import errorHandler from "@/shared/helpers/errorHandler";
import { getSubmissionById } from "@/problem/model/domainLogic/submission";
import { AxiosError } from "axios";
import { useStore } from "vuex";

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>

const isSubmitting = ref(false)
const isRunning = ref(false)
const showConsole = ref(false)
const consoleSelected = ref(0)
const testCases = ref()

const currentSubmission = ref()

function runCode() {
    console.log('running code ...');
}
async function submit() {
    try {
        console.log('submitting');
        
        isSubmitting.value = true
    } catch (error) {
        isSubmitting.value = false
        errorHandler(error as AxiosError)
    }
}

onMounted(async () => {
    try {
        testCases.value = await getTestCasesById(problem.value.getId())
        // currentSubmission.value = await getSubmissionById('62ff25b8f86d54687bafb3e8')
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

</script>

<style lang="scss" scoped>
.problem-console {
    position: relative;
    display: flex;
    align-items: center;
    background-color: white;

    .console-window {
        position: absolute;
        bottom: var(--nav-height);
        left: -1px;
        right: -1px;
        height: calc(100vh - 15px - 32px - 15px - var(--nav-height) - 15px);
        overflow: hidden;
        border: 1px solid black;
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