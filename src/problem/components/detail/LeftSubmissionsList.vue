<template>
    <table class="submission-list">
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
</template>

<script lang="ts" setup>
import Problem from '@/problem/model/problem';
import Submission from '@/problem/model/submission';
import { onMounted, ref, Ref, computed, PropType } from 'vue';
import { useStore } from 'vuex';
import { dateFormat } from '../../utils/stringFormatter'

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const currentSubmission = computed(() => store.state.problemStore.submission) as Ref<Submission>
const props = defineProps({
    submissions: {
        type: Array as PropType<Submission[]>,
        required: true
    }
})

function isSelecting(submission: Submission) {
    if (currentSubmission.value === null)
        return false
    return submission.getId() === currentSubmission.value.getId()
}
</script>

<style lang="scss" scoped>
    .submission-list {
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
</style>