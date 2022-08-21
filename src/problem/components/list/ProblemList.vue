<template>
    <h1 class="title"> Practice Problems </h1>
    <div class="list">
        <div class="list-container">
            <table>
                <colgroup>
                    <col class="id" />
                    <col class="name" />
                    <col class="difficulty" />
                </colgroup>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Difficulty</th>
                </tr>
                <Item v-for="(problem, index) in problems[currentPage]" :key="index"
                    :tableId="index + 1 + perPage * currentPage" :id="problem.getId()" :name="problem.getName()"
                    :difficulty="problem.getDifficulty()" />
            </table>
        </div>
        <TabNavigate :numberOfProblem="numberOfProblem" :perPage="perPage" :currentPage="currentPage" @gotoPage="gotoPage"/>
    </div>
</template>

<script lang="ts" setup>
import Item from './Item.vue';
import TabNavigate from './TabNavigate.vue';
import { countProblems, listProblem } from '@/problem/model/domainLogic/problem';
import { onMounted, Ref, ref, watch } from 'vue';
import errorHandler from '@/shared/helpers/errorHandler';
import { AxiosError } from 'axios';
import Problem from '@/problem/model/problem';

const problems: Ref<Array<Array<Problem>>> = ref([])
const currentPage = ref(0)
const perPage = ref(calculateNumberOfProblemPerPage())
const numberOfProblem = ref(50)

function gotoPage(page: number) {
    currentPage.value = page
}

async function getProblemBaseOnPage() {
    problems.value[currentPage.value] = await listProblem(currentPage.value, perPage.value)
}

onMounted(async () => {
    try {
        numberOfProblem.value = await countProblems()
        await getProblemBaseOnPage()
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

watch(currentPage, async () => {
    try {
        await getProblemBaseOnPage()
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

watch(perPage, async () => {
    try {
        await getProblemBaseOnPage()
    } catch (error) {
        errorHandler(error as AxiosError)
    }
})

function calculateNumberOfProblemPerPage() {
    return Math.floor((window.innerHeight - 250) / 50);
}

</script>

<style lang="scss" scoped>
.title {
    margin: 2%;
    text-align: center;
}

.list {}

.list-container {
    @apply border rounded-lg border-black pl-2 pr-2 bg-slate-100;
}

table {
    @apply table-fixed w-full rounded-lg border-separate;
    border-spacing: 0 10px;

    .id {
        width: 20%;
    }

    .name {
        width: 50%;
    }

    .difficulty {
        width: 30%;
    }

    tr {
        @apply bg-white hover:bg-slate-200;

        th {
            @apply p-2 bg-slate-100;
        }
    }
}
</style>