<template>
    <div class="submissions">
        <div class="no-submit" v-if="submissions.length === 0">
            <h4>You don't have any submissions yet.</h4>
        </div>
        <table v-else>
            <colgroup>
                <col class="time" />
                <col class="status" />
                <col class="runtime" />
                <col class="memory" />
                <col class="language" />
            </colgroup>
            <tr class="submissions__header">
                <th>Time submitted</th>
                <th>Status</th>
                <th>Runtime</th>
                <th>Memory</th>
                <th>Language</th>
            </tr>
            <tr v-for="(submission, index) in submissions" :key="index"
                @click="$store.dispatch('problemStore/setSubmission', submission)"
                :class="isSelecting(submission) ? 'selected' : ''">
                <td :title="dateFormat(submission.getSubmittedAt())">{{ dateFormat(submission.getSubmittedAt()) }}</td>
                <td :title="submission.getStatus()" class="status" :class="submission.getStatus()">{{
                        submission.getStatus()
                }}</td>
                <td :title="submission.getRuntime().toNumber().toString()">{{ submission.getRuntime().toNumber() }} ms
                </td>
                <td :title="submission.getMemory().toNumber().toString()">{{ submission.getMemory().toNumber() }} kb
                </td>
                <td :title="submission.getProgrammingLanguage()">{{ submission.getProgrammingLanguage() }}</td>
            </tr>
        </table>
        <div class="running-submissions">
            <!-- <h4> Running submission </h4> -->
            <table>
                <colgroup>
                    <col class="id" />
                    <col class="test-case" />
                </colgroup>
                <tr>
                    <th>ID</th>
                    <th>Running testcase</th>
                </tr>
                <tr>
                    <td>4h204985hf2043857d2n4</td>
                    <td>5/12</td>
                </tr>
                <tr>
                    <td>4h204985hf2043857d2n4</td>
                    <td>7/12</td>
                </tr>
                <tr>
                    <td>4h204985hf2043857d2n4</td>
                    <td>6/12</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { listSubmission } from '@/problem/model/domainLogic/submission';
import Problem from '@/problem/model/problem';
import JudgingTestCase from '@/problem/model/socket/testCase';
import Submission from '@/problem/model/submission';
import errorHandler from '@/shared/helpers/errorHandler';
import { computed } from '@vue/reactivity';
import { AxiosError } from 'axios';
import { onMounted, ref, Ref } from 'vue';
import { useStore } from 'vuex';
import { dateFormat } from '../../utils/stringFormatter'

const submissions = ref([]) as Ref<Submission[]>
const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const currentSubmission = computed(() => store.state.problemStore.submission) as Ref<Submission>

onMounted(async () => {
    try {
        submissions.value = await listSubmission(0, 1000, '6268ed01fad0b0e48fbd0ed6', problem.value.getId())
        JudgingTestCase.getInstance().start()
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

function isSelecting(submission: Submission) {
    if (currentSubmission.value === null)
        return false
    return submission.getId() === currentSubmission.value.getId()
}
</script>

<style lang="scss" scoped>
.submissions {
    // @apply relative;
    .no-submit {
        @apply mt-3 text-center;
    }

    table {
        @apply table-fixed w-full rounded-lg;

        .time {
            width: 25%;
        }

        .status {
            width: 15%;
        }

        .runtime {
            width: 20%;
        }

        .memory {
            width: 20%;
        }

        .language {
            width: 20%;
        }

        th,
        tr {
            th {
                @apply p-2 bg-slate-200;
            }

            td {
                @apply text-center p-2 cursor-pointer truncate;
            }

            td.status {
                @apply text-red-600;
            }

            td.status.AC {
                @apply text-green-600;
            }
        }

        tr:nth-child(2n) {
            @apply bg-slate-100 hover:bg-slate-200;
        }

        tr:nth-child(2n + 1) {
            @apply bg-slate-50 hover:bg-slate-200;
        }

        tr.selected {
            @apply bg-slate-200;
        }

        tr.submissions__header {
            @apply sticky top-0;
        }
    }

    .running-submissions {
        @apply absolute -bottom-1 bg-white border border-slate-900 rounded-xl overflow-hidden;
        left: -1px;
        right: -1px;
    }
}
</style>