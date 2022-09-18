<template>
    <div class="submissions">
        <div class="no-submit" v-if="submissions.length === 0">
            <h4>You don't have any submissions yet.</h4>
        </div>
        <LeftSubmissionsList :submissions="submissions" v-else />

        <div class="running-submissions" v-if="runningSubmissions.length !== 0">
            <h4> Running submission </h4>
            <LeftSubmissionsRunning :runningSubmissions="runningSubmissions" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import LeftSubmissionsList from './LeftSubmissionsList.vue';
import LeftSubmissionsRunning from './LeftSubmissionsRunning.vue';
import { listSubmission, getRunningSubmission } from '@/problem/model/domainLogic/submission';
import Problem from '@/problem/model/problem';
import JudgingTestCase from '@/problem/model/socket/testCase';
import Submission from '@/problem/model/submission';
import errorHandler from '@/shared/helpers/errorHandler';
import { computed } from '@vue/reactivity';
import { AxiosError } from 'axios';
import { onMounted, onUnmounted, ref, Ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const emit = defineEmits(['selectUpdated'])
const submissions = ref([]) as Ref<Submission[]>
const runningSubmissions = ref([]) as Ref<Array<{
    id: string,
    coderId: string,
    problemId: string,
    submittedAt: string,
    judgingTestCase: number,
    totalTestCases: number
}>>
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const runningSubmissionId = computed(() => store.state.problemStore.runningSubmissionId) as Ref<string | null>

async function init() {
    try {
        const coderId : string = localStorage.getItem('coderId') as string;
        submissions.value = await listSubmission(0, 1000, coderId, problem.value.getId())
        runningSubmissions.value = await getRunningSubmission(coderId, problem.value.getId())
        
        if (runningSubmissions.value.length !== 0) {
            JudgingTestCase.getInstance().start()
            JudgingTestCase.getInstance().getRunningSubmission(async (data) => {
                if (typeof data === 'string') {
                    runningSubmissions.value = runningSubmissions.value.filter((runningSubmission) => {
                        return runningSubmission.id !== data
                    })
                    await init()
                    store.dispatch('problemStore/setSubmission', submissions.value.at(-1))
                } else {
                    runningSubmissions.value.forEach((runningSubmission) => {
                        if (runningSubmission.id === data.id) {
                            runningSubmission.judgingTestCase = data.judgingTestCase
                            runningSubmission.totalTestCases = data.totalTestCases
                        }
                    })
                }
            })
            runningSubmissions.value.forEach((runningSubmission) => {
                JudgingTestCase.getInstance().queryRunningSubmission(runningSubmission.id)
            })
        }
    } catch (error) {
        errorHandler(error as AxiosError)
    }
}

onMounted(async () => {
    await init()
})

watch(runningSubmissionId, async () => {
    if (runningSubmissionId.value) {
        await init()
    }
    emit('selectUpdated', 3)
})
</script>

<style lang="scss" scoped>
.submissions {

    // @apply relative;
    .no-submit {
        @apply mt-3 text-center;
    }

    .running-submissions {
        @apply absolute -bottom-1 bg-white border border-slate-900 rounded-xl overflow-hidden;
        left: -1px;
        right: -1px;
    }
}
</style>