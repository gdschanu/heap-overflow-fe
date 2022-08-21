<template>
    <div class="run-code-result">
        <div class="before-run" v-if="detailIsEmpty">
            <h3>feature will be released soon</h3>
        </div>
        <div class="ran" v-else>
            <h3 class="status">Accepted</h3>
            <Console :text="'[2,7,11,15]\n9'" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Console from "../common/Console.vue";

const props = defineProps({
    runCodeResult: {
        type: Object,
        default: {}
    }
})

const detailIsEmpty = computed(() => {
    return (
        Object.keys(props.runCodeResult).length === 0 &&
        props.runCodeResult.constructor === Object
    )
})
</script>

<style lang="scss" scoped>
.run-code-result {
    .before-run {
        @apply text-center;
    }

    .ran {}
}
</style>