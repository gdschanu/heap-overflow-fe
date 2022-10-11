<template>
    <div class="markdown-u">
        <Markdown :source="description" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Markdown from "vue3-markdown-it";

const props = defineProps({
    description: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss">
.markdown-u {
    h1 {
        font-size: 25px;
    }
    h2 {
        font-size: 23px;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 19px;
    }
    h5 {
        font-size: 18px;
    }
    h6 {
        font-size: 17px;
    }
    white-space: pre-line;
    code {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 3px;
        font-family: 'Courier New', Courier, monospace;
    }
    blockquote {
        border-left: 4px solid black;
        padding: 0 10px;
        white-space: pre-line;
    }
    ol {
        padding-left: 15px;
        white-space: normal;
    }
    ul {
        list-style: disc outside;
        padding-left: 15px;
        white-space: normal;
    }
    ul,
    ol {
        ul {
            list-style: circle;
        }
        ol {
            list-style: lower-roman;
        }
        ul,
        ol {
            ul {
                list-style: square;
            }
            ol {
                list-style: lower-alpha;
            }
        }
    }
    li {
        white-space: normal;
    }
    table,
    th,
    td {
        border-collapse: collapse;
        border: 1px solid black;
    }
    th,
    td {
        padding: 5px;
    }
    table {
        thead {
            tr {
                background-color: var(--container-color-darker);
            }
        }
        tr:nth-child(2n) {
            background-color: var(--container-color-darker);
        }
    }
    code.hljs {
        display: block;
        white-space: pre-line;
        padding: 8px;
        overflow-y: auto;
    }
    code.hljs::-webkit-scrollbar-thumb {
        display: none;
    }
    code.hljs::-webkit-scrollbar {
        border-top: 1px solid black;
    }
    code.hljs:hover::-webkit-scrollbar-thumb {
        display: block;
    }
    hr {
        border: none;
        border-bottom: 1px solid black;
    }

    a {
        text-decoration: underline;
        font-style: italic;
        color: rgb(30, 30, 30);
    }

    a:hover {
        color: rgb(120, 120, 120);
    }
}
</style>