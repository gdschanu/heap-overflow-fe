<template>
    <div class="console-submission">
        <div class="status df" v-if="status.length === 0 && submissionIsEmpty">
            {{
                translate({
                    en: "your submission will show in here",
                    vi: "bài nộp của bạn sẽ được hiển thị ở đây",
                })
            }}
        </div>
        <div
            class="status ac"
            v-if="submission.status === 'AC' && !submissionIsEmpty"
        >
            <h2 class="title">
                &#127881;
                {{
                    translate({
                        en: "Accepted",
                        vi: "Chính xác",
                    })
                }}
                &#127881;
            </h2>
            <p>
                &#128337;
                {{
                    `${translate({
                        en: "Runtime",
                        vi: "Thời gian chạy",
                    })}:  ${submission.runTime} ms(${translate({
                        en: "millisecond",
                        vi: "mili giây",
                    })}).`
                }}
            </p>
            <p>
                &#128190;
                {{
                    `${translate({
                        en: "Memory",
                        vi: "Bộ nhớ sở dụng",
                    })}:  ${submission.memory} kb(${translate({
                        en: "kilobyte",
                        vi: "kilobyte",
                    })}).`
                }}
            </p>
            <p class="button">
                {{ translate({ en: "next problem", vi: "câu hỏi tiếp theo" }) }}
            </p>
        </div>
        <div
            class="status wa"
            v-if="
                submission.status === 'WA' &&
                (submission.failedTestCaseDetail.isSample ||
                    submission.failedTestCaseDetail.isSample === undefined) &&
                !submissionIsEmpty
            "
        >
            <h2 class="title">
                {{
                    translate({
                        en: "Wrong answer",
                        vi: "Kết quả sai",
                    })
                }}
            </h2>
            <div class="group">
                <p>
                    {{
                        translate({
                            en: "input: ",
                            vi: "đầu vào: ",
                        })
                    }}
                </p>
                <Console
                    class="console"
                    :text="submission.failedTestCaseDetail.input"
                />
            </div>
            <div class="group">
                <p>
                    {{
                        translate({
                            en: "your output: ",
                            vi: "kết quả của bạn: ",
                        })
                    }}
                </p>
                <Console
                    class="console"
                    :text="submission.failedTestCaseDetail.actualOutput"
                />
            </div>
            <div class="group">
                <p>
                    {{
                        translate({
                            en: "expected output: ",
                            vi: "Kết quả dự kiến: ",
                        })
                    }}
                </p>
                <Console
                    class="console"
                    :text="submission.failedTestCaseDetail.expectedOutput"
                />
            </div>
        </div>
        <div
            class="status wa"
            v-if="
                submission.status === 'WA' &&
                !submission.failedTestCaseDetail.isSample &&
                !submission.failedTestCaseDetail.isSample === undefined &&
                !submissionIsEmpty
            "
        >
            <h2 class="title">
                {{
                    translate({
                        en: "Wrong answer",
                        vi: "Kết quả sai",
                    })
                }}
            </h2>
            <div class="hidden-test-case">
                <h3>
                    {{
                        translate({
                            en: "this test case is hidden",
                            vi: "mẫu thử này bị ẩn",
                        })
                    }}
                </h3>
            </div>
        </div>
        <div
            class="status tle"
            v-if="submission.status === 'TLE' && !submissionIsEmpty"
        >
            <h2 class="title">
                {{
                    translate({
                        en: "Time limit exceed",
                        vi: "Thời gian chạy quá lâu",
                    })
                }}
            </h2>
            <!-- <Console
                class="console"
                :maxLine="10"
                :text=""
            /> -->
        </div>
        <div
            class="status mle"
            v-if="submission.status === 'MLE' && !submissionIsEmpty"
        >
            <h2 class="title">
                {{
                    translate({
                        en: "Memory limit exceed",
                        vi: "Tốn quá nhiều bộ nhớ",
                    })
                }}
            </h2>
            <!-- <Console
                class="console"
                :maxLine="10"
                :text=""
            /> -->
        </div>
        <div
            class="status ce"
            v-if="submission.status === 'CE' && !submissionIsEmpty"
        >
            <h2 class="title">
                {{
                    translate({
                        en: "Compilation error",
                        vi: "Lỗi biên dịch",
                    })
                }}
            </h2>
            <Console
                class="console"
                :maxLine="1000"
                :text="submission.compilationMessage"
            />
        </div>
    </div>
</template>

<script>
import Console from "../../general/Console";
import translate from "../../../helpers/translate";

export default {
    name: "Submission",
    data() {
        return {
            status: "",
        };
    },
    props: {
        submission: {
            type: Object,
            default: {},
        },
    },
    components: {
        Console,
    },
    methods: {
        translate(input) {
            return translate(input);
        },
    },
    computed: {
        submissionIsEmpty() {
            return (
                Object.keys(this.submission).length === 0 &&
                this.submission.constructor === Object
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.console-submission {
    padding: 10px;
    .status {
        .title {
            color: rgb(255, 70, 70);
            margin-bottom: 10px;
        }
    }
    .status.ac {
        .title {
            color: rgb(43, 223, 43);
        }
    }
    .status.wa {
        .group {
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            p {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 140px;
            }
            .console {
                flex: 1;
            }
        }
        .hidden-test-case {
            text-align: center;
            margin-top: 30px;
            h3 {
                color: var(----text-color-light);
            }
        }
    }
    .status.df {
        text-align: center;
        margin-top: 30px;
        h3 {
            color: var(----text-color-light);
        }
    }
    .button {
        display: block;
        margin: auto;
        margin-top: 40px;
        padding: 5px;
        width: fit-content;
        text-align: center;
        border: 1px solid var(--line-color);
        background-color: var(--container-color-darker);
        transition: all 0.2s;
    }
    .button:hover {
        cursor: pointer;
        background-color: var(--container-color);
    }
}
.light-theme .console-submission {
    .status.tle,
    .status.mle,
    .status.ce {
        .console {
            color: rgb(235, 69, 69);
            background-color: rgb(252, 228, 232);
        }
    }
}
.dark-theme .console-submission {
    .status.tle,
    .status.mle,
    .status.ce {
        .console {
            color: rgb(243, 92, 112);
            background-color: rgb(63, 7, 15);
        }
    }
}
</style>