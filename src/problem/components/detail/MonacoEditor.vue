<template>
    <MonacoEditor
        class="monaco-editor"
        :language="languageConvert(language)"
        :code="code"
        :theme="getTheme"
        :options="getOptions"
        @mounted="onMounted"
        @codeChange="onCodeChange"
        v-if="reCreate"
    >
    </MonacoEditor>
</template>

<script>
import MonacoEditor from "vue-monaco-editor";
import converter from "../../utils/languageConverter";

export default {
    name: "Monaco editor",
    components: {
        MonacoEditor,
    },
    props: {
        language: String,
        code: {
            type: String,
            default: `your code go here`,
        },
    },
    data() {
        return {
            reCreate: true,
        };
    },
    methods: {
        onMounted(editor) {
            this.editor = editor;
        },
        onCodeChange(editor) {
            this.$emit("dataUpdated", editor.getValue());
        },
        languageConvert(language) {
            return converter(language);
        },
    },
    computed: {
        getTheme() {
            return this.$store.state.theme === "dark"
                ? "vs-dark"
                : "vs";
        },
        getOptions() {
            return this.$store.state.problemStore.editorSettings;
        },
    },
    watch: {
        language() {
            this.reCreate = false;
            setTimeout(() => {
                this.reCreate = true;
            }, 0);
        },
        getOptions() {
            this.reCreate = false;
            setTimeout(() => {
                this.reCreate = true;
            }, 0);
        },
        getTheme() {
            this.reCreate = false;
            setTimeout(() => {
                this.reCreate = true;
            }, 0);
        },
    },
};
</script>
<style lang="scss" scoped>
.monaco-editor, .monaco-editor .inputarea {
    background-color: transparent;
}
.monaco-editor {
    
    transition: none;
    .monaco-editor.vs {
        .monaco-editor-background {
            background-color: transparent !important;
        }
        .glyph-margin {
            background-color: transparent !important;
        }
    }
    .monaco-editor.vs-dark {
        .monaco-editor-background {
            // background-color:;
        }
        .glyph-margin {
            // background-color:;
        }
        .line-numbers {
            color: #595c63;;
        }
        .current-line {
            border-color: #5c5c5c77;
        }
        .token {
            // color: #abb2bf;
        }
        .token.number {
            color: #e5c07b;
        }
        .token.keyword {
            color: #c678dd;
        }
        .token.string {
            color: #98c379;
        }
        .token.identifier {
            color: #b7bfce;
        }
        .token.delimiter {
            color: #56b6c2;
        }
        .token.delimiter.curly, .token.delimiter.parenthesis, .token.delimiter.square {
            color: rgb(249, 102, 102);
        }
        .token.comment {
            color: #6e727b;
        }
        // js
        .token.array.js {
            color: rgb(249, 102, 102);
        }
    }
}
</style>