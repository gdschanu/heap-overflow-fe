<template>
    <div class="flex justify-between h-screen">
        <div class="h-full w-full shadow-2xl lg:basis-2/5 overflow-auto bg-slate-50 dark:bg-slate-900">
            <slot name="layout-content"></slot>
        </div>
        <div class="relative hidden overflow-hidden flex-1 lg:flex lg:justify-center lg:items-center dark:bg-slate-800">
            <slot name="image"></slot>
            <span class="absolute bottom-1 right-1 text-sm text-slate-700 dark:text-slate-300">Power by Google Developer Student Clubs - HANU</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>
