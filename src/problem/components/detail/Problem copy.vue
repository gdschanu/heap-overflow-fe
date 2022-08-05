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

<script>
import Header from "./Header";
import Left from "./Left";
import Right from "./Right";
import Loading from "../../Loading";
import ProblemNotFound from "./ProblemNotFound";

// import { getProblemById } from "../../../model/practiceProblem/domainLogic/coreProblem/problem";
// import { getPracticeProblem } from "../../../model/practiceProblem/domainLogic/problem";

import errorHandler from "../../../helpers/errorHandler";

export default {
    name: "problem",
    data() {
        return {
            firstLoading: true,
            problemNotFound: false,
            fullScreen: false,
            problem: {},
            testCases: {},
        };
    },
    components: {
        Header,
        Left,
        Right,
        Loading,
        ProblemNotFound,
    },
    methods: {},
    async created() {
        try {
            // __________create a problem__________
            const coreProblemProblemId = await (await getPracticeProblem(this.$route.params.id)).getCoreProblemProblemId();
            this.problem = await getProblemById(coreProblemProblemId);

            // __________restore the code of problem from local storage (if exist)__________
            this.$store.dispatch("problem/setCurrentProblemsCode", {
                id: this.problem.getId(),
                code: localStorage.getItem("problemID: " + this.problem.getId())
                    ? JSON.parse(
                          localStorage.getItem(
                              "problemID: " + this.problem.getId()
                          )
                      )["code"]
                    : "",
            });
            // __________monaco editor settings__________
            let currentSettings = JSON.parse(
                localStorage.getItem("editorSettings")
            );
            if (!currentSettings) currentSettings = {};
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
                language: this.problem.getAllowedProgrammingLanguages()[0],
            };

            const settingToSave = {};
            Object.keys(defaultSettings).forEach((key) => {
                settingToSave[key] =
                    typeof currentSettings[key] !== "undefined"
                        ? currentSettings[key]
                        : defaultSettings[key];
            });
            this.$store.dispatch("general/setEditorSettings", settingToSave);
            this.firstLoading = false;
        } catch (error) {
            this.problemNotFound = true;
            this.firstLoading = false;
            errorHandler(error);
            // return;
        }
    },
    watch: {},
};
</script>
<style lang="scss" scoped>
$left-width: 40%;
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