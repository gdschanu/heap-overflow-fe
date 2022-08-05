<template>
    <div class="test-case">
        <div
            class="test"
            v-for="(sample, index) in sampleTestCases"
            :key="index"
        >
            <p>
                {{
                    sampleTestCases.length != 1
                        ? `${translate({ en: "Test case", vi: "Đầu vào" })} ${
                              index + 1
                          }: `
                        : ""
                }}
            </p>
            <div class="container">
                <Console :text="sample.getInput()" />
                <Console :text="sample.getExpectedOutput()" />
            </div>
        </div>
    </div>
</template>

<script>
import Console from "../../general/Console";
import translate from "../../../helpers/translate";

export default {
    name: "TestCase",
    props: {
        testCases: {
            type: Array,
            default: [],
        },
    },
    methods: {
        translate(input) {
            return translate(input);
        },
    },
    computed: {
        sampleTestCases() {
            this.testCases.sort((a, b) => a.getOrdinal() - b.getOrdinal());
            // return this.testCases;
            return this.testCases.filter((testCase) => testCase.getIsSample());
        },
    },
    components: {
        Console,
    },
};
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
        .container > * {
            flex: 0 0 calc(50% - $gap);
        }
    }
}
</style>