<template>
    <div class="select">
        <p class="select__text">{{ selected === null ? text : selected }}</p>
        <span class="select__icon">
            <i class="fa-solid fa-chevron-down"></i>
        </span>
        <ul class="select__list">
            <li v-for="item in list" :key="item.value" :class="
                selected === item.name ? 'select__list__item--selected' : ''
            " @click="$emit('dataUpdated', item)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';

const isOpening = ref(false)

const props = defineProps({
    list: {
        type: Array as PropType<Array<{
            name: string,
            value: string
        }>>,
        required: true
    },
    text: {
        type: String,
        default: "choose one",
    },
    selected: {
        type: String,
        default: null,
    }
})
</script>

<style lang="scss" scoped>
.select {
    @apply relative min-w-small py-2.5 px-2 flex items-center justify-between rounded-lg bg-slate-700
    hover:bg-slate-800 active:bg-slate-900 cursor-pointer;

    &__text {
        @apply mr-2 text-white font-bold;
    }

    &__icon {
        @apply flex items-center text-white;
        transform: rotate(0deg);
        transition: transform 0.4s;
    }

    &__list {
        @apply hidden absolute z-50 top-full mt-1 left-0 p-2.5 min-w-small rounded-lg bg-slate-100 border border-slate-700;

        &__item--selected {
            font-weight: bold;
        }
    }
}

.select:hover {
    &__icon {
        @apply block;
        transform: rotate(180deg);
        transition: transform 0.4s;
    }
}
</style>
