<template>
    <button
        :title="des"
        class="relative rounded-lg px-5 py-2.5 font-bold"
        :class="type + (disabled ? '-disabled' : '')"
        :disabled="disabled"
        @click="clicked"
    >
        <span :class="loading ? 'opacity-0' : ''">
            {{ text }}
        </span>
        <LoadingIcon
            v-if="loading"
            class="
                absolute
                top-1/2
                left-1/2
                transform
                -translate-x-1/2 -translate-y-1/2
            "
            :type="type"
        />
    </button>
</template>

<script lang="ts" setup>
import LoadingIcon from "./LoadingIcon.vue";

const props = defineProps({
    text: String,
    type: {
        type: String,
        default: "primary",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    des: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(['clicked'])
function clicked() {
    emit('clicked')
}

</script>

<style lang="scss" scoped>
.primary {
    @apply bg-slate-700 text-slate-50 hover:bg-slate-800 active:bg-slate-900 focus:ring-2 focus:ring-slate-900
    dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:active:bg-slate-200 dark:focus:ring-slate-300;
}
.primary-disabled {
    @apply bg-slate-100 text-slate-300 cursor-not-allowed;
}
.secondary {
    @apply bg-transparent text-slate-700 border border-slate-700 hover:text-slate-800 hover:border-slate-800
    active:text-slate-900 active:border-slate-900 focus:ring-1 focus:ring-slate-900
    dark:text-slate-50 dark:border-slate-50 dark:hover:border-slate-100 dark:hover:text-slate-100
    dark:active:border-slate-200 dark:active:text-slate-200 dark:focus:ring-slate-50;
}
.secondary-disabled {
    @apply text-slate-300 border border-slate-300 cursor-not-allowed;
}
</style>
