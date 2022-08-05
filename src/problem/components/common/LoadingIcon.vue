<template>
    <div class="flex justify-center items-center">
        <div style="border-top-color: transparent;" class="
                rounded-full
                h-8
                w-8
                border-4
                border-t-transparent
                animate-spin
            " :class="type"></div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    type: {
        type: String,
        default: 'primary'
    }
})

</script>

<style lang="scss" scoped>
.primary {
    @apply border-slate-50 dark:border-slate-900
}

.secondary {
    @apply border-slate-900 dark:border-slate-50
}
</style>