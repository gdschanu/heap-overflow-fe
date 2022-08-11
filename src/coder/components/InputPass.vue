<template>
    <input
        type="password"
        :disabled="disabled"
        :required="require"
        :placeholder="placeholder"
        :value="value"
        @input="dataUpdated"
    />
</template>

<script>
export default {
    name: "InputPass",
    props: {
        value: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        require: {
            type: Boolean,
            default: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
    },
    methods: {
        dataUpdated(event) {
            this.$emit("dataUpdated", event.target.value);
        },
    },
};
</script>

<style lang="scss" scoped>
input {
    @apply rounded-xl p-2.5 focus:outline-none border focus:ring-1 bg-transparent
    text-black border-slate-700 hover:border-slate-800 focus:border-slate-900 focus:ring-slate-900
    dark:text-white dark:border-slate-300 dark:hover:border-slate-200 dark:focus:border-slate-100 dark:focus:ring-slate-100;
}
input[disabled] {
    @apply text-slate-300 border-slate-300 hover:border-slate-300 focus:border-slate-300 cursor-not-allowed;
}
</style>