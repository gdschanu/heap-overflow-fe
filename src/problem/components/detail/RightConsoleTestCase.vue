<template>
    <div class="test-case">
        <div class="test" v-for="(sample, index) in sampleTestCases" :key="index">
            <p>{{ sampleTestCases.length != 1 ? "Test case" : "" }}</p>
            <div class="container">
                <Console :text="sample.getInput()" />
                <Console :text="sample.getExpectedOutput()" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TestCase from "@/problem/model/testCase";
import { computed } from "vue";
import Console from "../../components/common/Console.vue";
import { PropType } from "vue";

const props = defineProps({
    testCases: {
        type: Array as PropType<Array<TestCase>>,
        default: [],
    },
})

const sampleTestCases = computed(() => {
    props.testCases.sort((a, b) => a.getOrdinal() - b.getOrdinal())
    return props.testCases.filter((testCase) => testCase.getSample())
})

</script>

<style lang="scss" scoped>
$gap: 20px;

.test-case {
    padding: $gap;

    .test {
        p {
            margin-bottom: calc($gap / 2);
        }

        margin-bottom: $gap;

        .container {
            display: flex;
            justify-content: space-between;
        }

        .container>* {
            flex: 0 0 calc(50% - $gap);
        }
    }
}
</style>