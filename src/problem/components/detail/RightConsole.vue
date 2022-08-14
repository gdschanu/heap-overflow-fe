<template>
    <div class="problem-console">
        <div class="console-window" v-show="showConsole">
            <TabBar :tabBarList="['Test case', 'Run code', 'Submission']" class="tab-bar" :selected="consoleSelected"
                @selectUpdated="(value) => { consoleSelected = value; }">
                <template v-slot:Testcase>
                    <TestCase :testCases="testCases" />
                </template>
                <template v-slot:Runcode>
                    <!-- <RunCode :runCodeResult="runCodeResult" /> -->
                </template>
                <template v-slot:Submission>
                    <!-- <Submission :submission="{ ...submission }" /> -->
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
        <Button @click="runCode" class="button" :disable="isSubmitting" text="Run code" />
        <Button @click="submit" class="button" :disable="isSubmitting" text="Submit Code" />
    </div>
</template>

<script lang="ts" setup>

import TabBar from "./ProblemTabBar.vue";
import TestCase from "./RightConsoleTestCase.vue";
import TestCaseModel from "@/problem/model/testCase";
// import RunCode from "./RightConsoleRunCode";
// import Submission from "./RightConsoleSubmission";
import Button from "../../components/common/Button.vue";
import Problem from "@/problem/model/problem";
import { onMounted, ref } from "vue";
import { getTestCasesById } from "../../model/domainLogic/testCase"

const isSubmitting = ref(false)
const isRunning = ref(false)
const showConsole = ref(false)
const submission = ref({})
const consoleSelected = ref(0)
const testCases = ref()

const props = defineProps({
    problem: {
        type: Problem,
        required: true
    }
})

function runCode() {
    console.log('running code ...');
}
function submit() {
    console.log('submitting...');
}

onMounted(async () => {
    testCases.value = await getTestCasesById('625bc0c4f4a7b0e40f3d23a4')
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
        height: 50vh;
        overflow: hidden;
        border: 1px solid black;
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