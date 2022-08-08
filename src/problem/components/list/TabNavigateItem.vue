<template>
    <div :class="`TabNavigateItem ${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

const emit =  defineEmits(['clicked'])

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

function handleClick() {
    if (!props.disabled)
        emit('clicked')
}
</script>

<style lang="scss" scoped>
.TabNavigateItem {
    @apply w-7 h-7 flex justify-center items-center mx-1 rounded cursor-pointer bg-slate-100 hover:bg-slate-200 active:bg-slate-300;
}

.active {
    @apply text-white bg-slate-900 hover:bg-slate-900 active:bg-slate-900;
}

.disabled {
    @apply bg-slate-50 hover:bg-slate-50 active:bg-slate-50 cursor-not-allowed text-slate-300;
}

</style>