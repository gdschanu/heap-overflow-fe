<template>
    <div class="wrapper">
        <pre class="console" :style="`max-height: calc(20px*${maxLine} + 20px);`">
            {{ text }}
        </pre>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: String,
    maxLine: {
        type: Number,
        default: 7,
    },
})

</script>

<style lang="scss" scoped>
$lh: 20px;

.wrapper {
    overflow: auto;
    border-radius: 10px;
    border: 1px solid black;

    .console {
        font-family: "Courier New", monospace;
        white-space: pre-line;
        width: max-content;
        padding: 10px;
        line-height: $lh;
        font-weight: bold;
    }

    .console::-webkit-scrollbar-thumb {
        display: none;
    }

    .console:hover::-webkit-scrollbar-thumb {
        display: block;
    }
}
</style>