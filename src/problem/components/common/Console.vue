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
        default: 3,
    },
})

</script>

<style lang="scss" scoped>
$lh: 20px;

.wrapper {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid var(--stroke-color);

    .console {
        font-family: "Courier New", monospace;
        white-space: pre-line;
        padding: 10px;
        line-height: $lh;
        overflow-y: auto;
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