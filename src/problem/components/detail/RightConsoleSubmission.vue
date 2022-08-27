<template>
    <div class="console-submission">
        <h4 class="status df" v-if="beforeSubmit">
            Your submission will be showed here
        </h4>
        <div v-if="submitting">
            <slot name="judging"></slot>
        </div>
        <div v-if="afterSubmit">
            <template v-if="submission">
                <div class="status ac" v-if="submission.getStatus() === 'AC'">
                    <h2 class="title">&#127881; Accepted &#127881;</h2>
                    <p> &#128337; {{ `Runtime: ${submission.getRuntime().toNumber()} ms` }} </p>
                    <p> &#128190; {{ `Memory: ${submission.getMemory().toNumber()} kb` }} </p>
                    <Button text="Next Problem" type="secondary" class="m-auto mt-2" />
                </div>

                <div class="status wa" v-if="submission.getStatus() === 'WA'">
                    <h2 class="title"> Wrong answer </h2>
                    <div class="group">
                        <p>input: </p>
                        <Console class="console" :text="submission.getFailedTestCase()?.getInput()" />
                    </div>
                    <div class="group">
                        <p>your output: </p>
                        <Console class="console" :text="submission.getFailedTestCase()?.getActualOutput()" />
                    </div>
                    <div class="group">
                        <p>expected output: </p>
                        <Console class="console" :text="submission.getFailedTestCase()?.getExpectedOutput()" />
                    </div>
                </div>

                <div class="status tle" v-if="submission.getStatus() === 'TLE'">
                    <h2 class="title"> Time limit exceed </h2>
                </div>

                <div class="status mle" v-if="submission.getStatus() === 'MLE'">
                    <h2 class="title"> Memory limit exceed </h2>
                </div>

                <div class="status ce" v-if="submission.getStatus() === 'CE'">
                    <h2 class="title"> Compilation error </h2>
                    <Console class="console" :maxLine="1000" :text="submission.getMessage()" />
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Submission from "@/problem/model/submission";
import { computed, onMounted, PropType } from "vue";
import Button from "../common/Button.vue";
import Console from "../common/Console.vue";

const props = defineProps({
    submission: {
        type: Object as PropType<Submission | null>,
        default: null
    },
    isJudging: Boolean
})

const beforeSubmit = computed(() => props.submission === null && props.isJudging === false)
const submitting = computed(() => props.isJudging === true)
const afterSubmit = computed(() => props.submission !== null && props.isJudging === false)
</script>

<style lang="scss" scoped>
.console-submission {
    @apply p-3;

    .status {
        .title {
            @apply text-red-600 mb-2;
        }
    }

    .status.ac {
        .title {
            @apply text-green-600;
        }
    }

    .status.wa {
        .group {
            @apply flex flex-row mt-3;

            p {
                @apply flex flex-col justify-center w-32;
            }

            .console {
                flex: 1;
            }
        }
    }

    .status.df {
        @apply text-center mt-3;
    }
}
</style>