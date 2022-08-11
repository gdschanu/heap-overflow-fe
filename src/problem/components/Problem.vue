<template>

        <div class="problem">
            <div class="problem-list-container">
                <ProblemList />
            </div>
        </div>

</template>

<script lang="ts" setup>
import ProblemList from './list/ProblemList.vue'
import Nav from '@/shared/components/general/Nav.vue';

</script>

<style lang="scss" scoped>
.problem-list-container {
    @apply mt-8 mx-auto w-4/5;
}
</style>