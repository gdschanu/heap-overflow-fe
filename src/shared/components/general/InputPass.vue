<template>
    <div>
        <div
            class="input-container"
            :class="{ focus: focusing, error: isInvalid, disabled }"
        >
            <slot name="prefix"></slot>
            <input
                type="password"
                :disabled="disabled"
                :required="required"
                :placeholder="placeholder"
                :value="modelValue"
                @input="handleInput"
                :error="isInvalid ? true : undefined"
                @blur="handleBlur"
                @focus="handleFocus"
            />
            <slot name="suffix"></slot>
        </div>
        <p class="text-red-500 mt-1" v-show="validate && isInvalid" >
            {{ validate ? validate(modelValue) : '' }}
        </p>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from 'vue';
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: true,
    },
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        default: "",
    },
    validate: {
        type: Function as PropType<(value: string) => string>,
    },
    alwaysShowValidate: {
        type: Boolean,
        default: false
    }
})

const blurred = ref(false)

function handleBlur() {
    if (!blurred.value)
        blurred.value = true
    focusing.value = false
}

const focusing = ref(false)
function handleFocus() {
    focusing.value = true
}

function handleInput(e: Event) {
    emit('update:modelValue', (<HTMLInputElement>e.target).value)
}

const isInvalid = computed(() => {
    return props.validate && props.validate(props.modelValue) && (blurred.value || props.alwaysShowValidate)
})
</script>

<style lang="scss" scoped>
.input-container {
    @apply py-2 px-3 transition border rounded-lg flex items-center gap-3
    border-slate-300
    dark:border-slate-500;
}

.input-container.focus {
    @apply ring-1 border-slate-900 ring-slate-900
    dark:border-slate-100 dark:ring-slate-100;
}

.input-container.error {
    @apply border-red-500 hover:border-red-500;
}

.input-container.error.focus {
    @apply ring-red-500 border-red-500;
}

.input-container.disabled {
    @apply border-slate-600 hover:border-slate-600 cursor-not-allowed;
}

.input-container.disabled.focus {
    @apply border-slate-600;
}

input {
    @apply block w-full bg-transparent focus:outline-none
    text-slate-900 dark:text-slate-50 placeholder:text-slate-500;
}

input[disabled] {
    @apply text-slate-600 placeholder:text-slate-600 cursor-not-allowed;
}
</style>
