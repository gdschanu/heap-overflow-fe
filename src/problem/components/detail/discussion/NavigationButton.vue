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
    height: 100%;
    aspect-ratio: 1/1;
    background-color: #f4f4f5;
    color: #27272A;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;

    &--active {
        background-color: #302f4e;
        color: white;
    }

    &--disabled {
        color: #c9c2e0;
        cursor: unset;
    }

}
</style>