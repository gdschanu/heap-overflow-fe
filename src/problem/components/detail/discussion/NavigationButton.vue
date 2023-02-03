<template>
    <button
        :class="`navigation-button ${active ? 'navigation-button--active' : ''} ${disabled ? 'navigation-button--disabled' : ''}`"
        @click="handleClick()"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['clicked'])

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
    if (props.disabled === true)
        return
    emit('clicked')
}
</script>

<style lang="scss" scoped>
.navigation-button {
    @apply text-slate-900 bg-slate-200
    dark:text-slate-50 dark:bg-slate-800;
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;

    &--active {
        @apply bg-slate-900 text-slate-50
        dark:bg-slate-100 dark:text-slate-900;
    }

    &--disabled {
        @apply text-slate-300 dark:text-slate-700;
        cursor: unset;
    }

}
</style>