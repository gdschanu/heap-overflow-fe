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
    @apply bg-slate-200 dark:bg-slate-800;
    overflow: overlay;
    border-radius: 5px;
    padding: 2px;
    .console {
        font-family: "Courier New", monospace;
        white-space: pre-line;
        width: max-content;
        padding: 10px;
        line-height: $lh;
        font-weight: bold;
    }
}
.wrapper::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}

.wrapper::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

</style>