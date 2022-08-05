<template>
    <div class="editor-setting">
        <h3>
            {{ translate({ en: "Editor settings", vi: "cài đặt" }) }}
        </h3>
        <hr />
        <div class="setting">
            <div class="font-size">
                <p>
                    {{
                        translate({
                            en: "font size",
                            vi: "cỡ chữ",
                        })
                    }}
                </p>
                <div class="input">
                    <i class="fa-solid fa-minus" @click="fontSize--"></i>
                    <input type="number" v-model="fontSize" />
                    <i class="fa-solid fa-plus" @click="fontSize++"></i>
                    <p>px</p>
                </div>
            </div>
            <div class="font-family">
                <p>
                    {{
                        translate({
                            en: "font family",
                            vi: "font chữ",
                        })
                    }}
                </p>
                <div class="input">
                    <Select
                        class="select"
                        :selectList="fontFamilyList"
                        :selected="editorSettings.fontFamily"
                        @dataUpdated="fontFamilyChanged"
                    />
                </div>
            </div>
            <div class="font-weight">
                <p>
                    {{
                        translate({
                            en: "font weight",
                            vi: "kiểu chữ",
                        })
                    }}
                </p>
                <div class="input">
                    <Select
                        class="select"
                        :selectList="fontWeightOptions"
                        :selected="editorSettings.fontWeight"
                        @dataUpdated="fontWeightChanged"
                    />
                </div>
            </div>
            <div class="line-height">
                <p>
                    {{
                        translate({
                            en: "line height",
                            vi: "khoảng cách dòng",
                        })
                    }}
                </p>
                <div class="input">
                    <i class="fa-solid fa-minus" @click="lineHeight--"></i>
                    <input type="number" v-model="lineHeight" />
                    <i class="fa-solid fa-plus" @click="lineHeight++"></i>
                    <p>px</p>
                </div>
            </div>
            <div class="word-wrap">
                <p>
                    {{
                        translate({
                            en: "word wrap",
                            vi: "gộp dòng",
                        })
                    }}
                </p>
                <div class="input">
                    <div
                        :class="'switch-button ' + (wordWrap ? 'on' : 'off')"
                        @click="wordWrap = !wordWrap"
                    ></div>
                    <p>
                        {{
                            translate({
                                en: wordWrap ? "on" : "off",
                                vi: wordWrap ? "bật" : "tắt",
                            })
                        }}
                    </p>
                </div>
            </div>
            <div class="line-numbers">
                <p>
                    {{
                        translate({
                            en: "show line numbers",
                            vi: "hiện số dòng",
                        })
                    }}
                </p>
                <div class="input">
                    <div
                        :class="'switch-button ' + (lineNumbers ? 'on' : 'off')"
                        @click="lineNumbers = !lineNumbers"
                    ></div>
                    <p>
                        {{
                            translate({
                                en: lineNumbers ? "on" : "off",
                                vi: lineNumbers ? "bật" : "tắt",
                            })
                        }}
                    </p>
                </div>
            </div>
            <p class="button" @click="resetToDefault">
                <span>
                    {{
                        translate({
                            en: "reset to default",
                            vi: "đặt về mặc định",
                        })
                    }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Select from "./RightSettingSelect";
import translate from "../../../helpers/translate";

export default {
    name: "EditorSetting",
    data() {
        return {
            fontSize: parseInt(
                this.$store.state.general.editorSettings.fontSize.slice(0, -2)
            ),
            fontFamilyList: [
                "Times New Roman",
                "monospace",
                "Courier New",
                "Papyrus",
                "Georgia",
                "Trebuchet MS",
                "Tahoma",
            ],
            fontWeightOptions: ["normal", "bold"],
            lineHeight: this.$store.state.general.editorSettings.lineHeight,
            wordWrap: this.$store.state.general.editorSettings.wordWrap,
            lineNumbers: this.$store.state.general.editorSettings.lineNumbers,
        };
    },
    components: {
        Select,
    },
    computed: {
        ...mapState({
            editorSettings: (state) => state.general.editorSettings,
        }),
    },
    methods: {
        translate(input) {
            return translate(input);
        },
        fontFamilyChanged(item) {
            this.$store.dispatch("general/setEditorSettings", {
                fontFamily: item,
            });
        },
        fontWeightChanged(item) {
            this.$store.dispatch("general/setEditorSettings", {
                fontWeight: item,
            });
        },
        resetToDefault() {
            const defaultSettings = {
                fontSize: "15px",
                fontFamily: "monospace", //[Times New Roman | monospace | Courier New | Papyrus | Georgia | Trebuchet MS | Tahoma]
                fontWeight: "normal", //[normal | bold]
                lineHeight: 20,

                // other
                wordWrap: false,
                lineNumbers: true,
                //animate

                // no change
                scrollBeyondLastLine: true,
                folding: true,
                foldingHighlight: true,
                tabCompletion: "on",
                automaticLayout: true,
                cursorBlinking: "phase", // [blink | smooth | phase | solid | expand]
            };
            this.fontSize = parseInt(defaultSettings.fontSize.slice(0, -2));
            this.lineHeight = defaultSettings.lineHeight;
            this.wordWrap = defaultSettings.wordWrap;
            this.lineNumbers = defaultSettings.lineNumbers;
            this.$store.dispatch("general/setEditorSettings", defaultSettings);
        },
    },
    watch: {
        fontSize(val) {
            if (val > 5 && val < 50) {
                this.$store.dispatch("general/setEditorSettings", {
                    fontSize: val + "px",
                });
            }
        },
        lineHeight(val) {
            if (val > 5 && val < 100) {
                this.$store.dispatch("general/setEditorSettings", {
                    lineHeight: val,
                });
            }
        },
        wordWrap(val) {
            this.$store.dispatch("general/setEditorSettings", {
                wordWrap: val,
            });
        },
        lineNumbers(val) {
            this.$store.dispatch("general/setEditorSettings", {
                lineNumbers: val,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.editor-setting {
    h3 {
        text-align: center;
        margin: 5px 0;
    }
    hr {
        border: none;
        border-bottom: 1px solid var(--stroke-color);
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
    .setting {
        max-height: 75vh;
        padding: 10px 0;
        overflow-y: auto;
        p {
            padding: 5px 0;
        }
        .font-size,
        .line-height {
            .input {
                flex: 0 0 180px;
                display: flex;
                justify-content: space-between;
                input {
                    width: 40%;
                    padding: 0 10px;
                    border-top: 1px solid var(--stroke-color);
                    border-bottom: 1px solid var(--stroke-color);
                    color: var(--first-color);
                    font-family: var(--body-font);
                    font-size: var(--normal-font-size);
                    text-align: center;
                    background-color: var(--container-color);
                }
                .fa-minus {
                    border: 1px solid var(--stroke-color);
                    line-height: 40px;
                    aspect-ratio: 1/1;
                    text-align: center;
                    background-color: var(--container-color-darker);
                }
                .fa-minus:hover {
                    cursor: pointer;
                }
                .fa-plus {
                    border: 1px solid var(--stroke-color);
                    line-height: 40px;
                    aspect-ratio: 1/1;
                    text-align: center;
                    background-color: var(--container-color-darker);
                }
                .fa-plus:hover {
                    cursor: pointer;
                }
                p {
                    margin-left: auto;
                }
            }
        }
        .font-family,
        .font-weight {
            position: relative;
            .input {
                width: 180px;
                .select {
                    height: 100%;
                    background: var(--container-color-darker);
                }
                .select:hover {
                    cursor: pointer;
                }
            }
        }
        .font-family {
            z-index: 20;
        }
        .font-size {
            z-index: 15;
        }
        .word-wrap,
        .line-numbers {
            .input {
                width: 180px;
                display: flex;
                justify-content: space-between;
                .switch-button {
                    position: relative;
                    height: 100%;
                    width: 63%;
                    border: 1px solid var(--stroke-color);
                    background-color: var(--container-color-darker);
                }
                $margin-slider: 5px;
                .switch-button::before {
                    position: absolute;
                    content: "";
                    border: 1px solid var(--stroke-color);
                    background-color: var(--container-color);
                    top: $margin-slider;
                    bottom: $margin-slider;
                    width: 50%;
                    left: $margin-slider;
                    transition: all 0.3s ease-in-out;
                }
                .switch-button:hover {
                    cursor: pointer;
                }
                .off.switch-button:before {
                    left: $margin-slider;
                }
                .on.switch-button:before {
                    left: calc(50% - $margin-slider - 2px);
                }
            }
        }
        .button {
            display: block;
            margin: auto;
            // padding: 2px 0;
            width: 40%;
            text-align: center;
            border: 1px solid var(--stroke-color);
            transition: all 0.2s;
            background-color: var(--container-color-darker);
            span {
                line-height: 28px;
            }
        }
        .button:hover {
            cursor: pointer;
            background-color: var(--container-color);
        }
    }
    .setting > * {
        display: flex;
        justify-content: space-between;
        margin: 20px;
        height: 40px;
    }
    .setting::-webkit-scrollbar {
        border-left: 1px solid var(--stroke-color);
    }
    .setting::-webkit-scrollbar-thumb {
        display: none;
    }
    .setting:hover::-webkit-scrollbar-thumb {
        display: block;
    }
}
.light-theme .button:hover {
    box-shadow: 2px 2px 1px rgb(207, 207, 207);
}
.dark-theme .button:hover {
    box-shadow: 2px 2px 1px rgb(58, 58, 58);
}
</style>