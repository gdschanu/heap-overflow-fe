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
            <tr>
                <th>Time submitted</th>
                <th>Status</th>
                <th>Runtime</th>
                <th>Memory</th>
                <th>Language</th>
            </tr>
            <tr v-for="(submission, index) in submissions" :key="index">
                <td>{{ dateFormat(submission.getSubmittedAt()) }}</td>
                <td class="status" :class="submission.getStatus()">{{ submission.getStatus() }}</td>
                <td>{{ submission.getRuntime().toNumber() }} ms</td>
                <td>{{ submission.getMemory().toNumber() }} kb</td>
                <td>{{ submission.getProgrammingLanguage() }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { listSubmission } from '@/problem/model/domainLogic/submission';
import Submission from '@/problem/model/submission';
import errorHandler from '@/shared/helpers/errorHandler';
import { computed } from '@vue/reactivity';
import { AxiosError } from 'axios';
import { onMounted, ref, Ref } from 'vue';
import { dateFormat } from '../../utils/stringFormatter'

const submissions = ref([]) as Ref<Submission[]>

onMounted(async () => {
    try {
        submissions.value = await listSubmission(0, 1000, '6268ed01fad0b0e48fbd0ed6', '62fde27ff9b65468f1327fbd')
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})
</script>

<style lang="scss" scoped>
.submissions {
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
    }
}
</style>