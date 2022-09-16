<template>
    <table>
        <colgroup>
            <col class="id" />
            <col class="test-case" />
        </colgroup>
        <tr>
            <th>ID</th>
            <th>Running testcase</th>
        </tr>
        <tr
            v-for="runningSubmission in runningSubmissions"
            :key="runningSubmission.id"
        >
            <td>{{runningSubmission.id}}</td>
            <td>{{runningSubmission.judgingTestCase}}/{{runningSubmission.totalTestCases}}</td>
        </tr>
    </table>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
    runningSubmissions: {
        type: Array as PropType<Array<{
            id: string,
            coderId: string,
            problemId: string,
            submittedAt: string,
            judgingTestCase: number,
            totalTestCases: number
        }>>
    }
})
</script>

<style lang="scss" scoped>
table {
    @apply table-fixed w-full rounded-lg;

    th,
    tr {
        th {
            @apply p-2 bg-slate-200;
        }

        td {
            @apply text-center p-2 cursor-pointer truncate;
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