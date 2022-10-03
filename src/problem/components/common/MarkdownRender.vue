<template>
    <div class="markdown-u">
        <Markdown :source="description" />
    </div>
</template>

<script>
import Markdown from "vue3-markdown-it";

export default {
    name: "MarkdownRender",
    props: {
        description: String,
    },
    components: {
        Markdown,
    },
};
</script>

<style lang="scss">
.markdown-u {
    white-space: pre-line;
    code {
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.15);
        padding: 2px;
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
}
</style>