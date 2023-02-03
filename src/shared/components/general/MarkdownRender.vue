<template>
    <div class="markdown-u">
        <slot></slot>
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
        font-size: 21px;
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
    @apply whitespace-pre-line;
    code {
        @apply rounded-lg p-1 font-mono
        bg-slate-200
        dark:bg-slate-800;
    }
    blockquote {
        @apply border-l-4 px-3
        border-slate-900 bg-slate-100
        dark:border-slate-100 dark:bg-slate-900;
    }
    ol {
        @apply pl-5 whitespace-normal list-decimal;
    }
    ul {
        @apply pl-5 whitespace-normal;
        list-style: disc outside;
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
        @apply whitespace-normal my-2;
    }
    table {
        @apply my-3 border-separate border-spacing-0 border rounded-lg overflow-hidden
        border-slate-300
        dark:border-slate-700;
        th, td {
            @apply p-3 border-r last:border-r-0
            border-r-slate-300
            dark:border-r-slate-600;
        }
        th {
            @apply border-b
            border-b-slate-300
            dark:border-b-slate-600;
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
        @apply border-b border-slate-300;
    }
    a {
        @apply underline italic text-sky-500 hover:text-sky-600;
    }
}
</style>