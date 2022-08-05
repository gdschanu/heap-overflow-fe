<template>
    <div class="problem-console">
        <div class="console-window" v-show="showConsole">
            <TabBar
                :tabBarList="['Test case', 'Run code', 'Submission']"
                class="tab-bar"
                :selected="consoleSelected"
                @selectUpdated="
                    (value) => {
                        consoleSelected = value;
                    }
                "
            >
                <template v-slot:Testcase>
                    <TestCase :testCases="testCases" />
                </template>
                <template v-slot:Runcode>
                    <!-- <RunCode :runCodeResult="runCodeResult" /> -->
                </template>
                <template v-slot:Submission>
                    <Submission :submission="{ ...submission }" />
                </template>
                <template v-slot:Testcase-icon>
                    <Icon icon="akar-icons:gear" />
                </template>
                <template v-slot:Runcode-icon>
                    <Icon icon="bx:code-block" />
                </template>
                <template v-slot:Submission-icon>
                    <Icon icon="akar-icons:check-box" />
                </template>
            </TabBar>
        </div>
        <div class="console-button" @click="showConsole = !showConsole">
            <span>Console</span>
            <span :class="showConsole ? 'icon flipped' : 'icon'">
                <Icon icon="bi:arrow-down-circle" />
            </span>
        </div>
        <Button @click="runCode" class="button" :disable="isSubmitting">
            <span v-if="!isRunning">{{ translate("run code") }}</span>
            <LoadingIcon v-else />
        </Button>
        <Button
            @click="submit"
            class="button"
            type="darker"
            :disable="isSubmitting"
        >
            <span v-if="!isSubmitting">{{ translate("submit") }}</span>
            <LoadingIcon v-else />
        </Button>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import TabBar from "./ProblemTabBar";
import TestCase from "./RightConsoleTestCase";
import RunCode from "./RightConsoleRunCode";
import Submission from "./RightConsoleSubmission";
import LoadingIcon from "../../general/LoadingIcon";
import Button from "../../general/Button";

// import SubmissionModel from "../../../model/coreProblem/submission";
// import { getTestCases } from "../../../model/practiceProblem/domainLogic/coreProblem/testCase";
// import { submit } from "../../../model/practiceProblem/domainLogic/coreProblem/submission";

import translate from "../../../helpers/translate";
import errorHandler from "../../../helpers/errorHandler";

export default {
    name: "ProblemConsole",
    props: {
        problem: Object,
    },
    data() {
        return {
            isSubmitting: false,
            isRunning: false,
            showConsole: false,
            submission: {},
            consoleSelected: 0,
            testCases: [],
        };
    },
    methods: {
        runCode() {
            if (this.isRunning) return;
            this.isRunning = true;
        },
        async submit() {
            if (this.isSubmitting) return;
            this.isSubmitting = true;
            try {
                const submission = SubmissionModel.create();
                submission.setCode(
                    this.$store.state.problem.currentProblemsCode[
                        this.problem.getId()
                    ]
                );
                submission.setProgrammingLanguage(
                    this.$store.state.general.editorSettings.language
                );
                submission.setProblemId(this.$route.params.id);

                this.submission = await submit("123-abc-xyz", submission);

                this.isSubmitting = false;
                this.showConsole = true;
                this.consoleSelected = 2;
            } catch (error) {
                this.isSubmitting = false;
                errorHandler(error);
            }
        },
        translate(input) {
            return translate(input);
        },
    },
    components: {
        TabBar,
        RunCode,
        TestCase,
        Submission,
        LoadingIcon,
        Button,
        Icon,
    },
    async created() {
        this.testCases = await getTestCases(this.problem.getId());
    },
};
</script>

<style lang="scss" scoped>
.problem-console {
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--container-color);
    .console-window {
        position: absolute;
        bottom: var(--nav-height);
        left: -1px;
        right: -1px;
        height: 50vh;
        overflow: hidden;
        background-color: var(--body-color);
        border: 1px solid var(--stroke-color);
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
        border: 1px solid var(--stroke-color);
        background: var(--container-color);
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