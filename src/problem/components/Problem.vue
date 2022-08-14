<template>
    <Nav>
        <div class="problem">
            <div class="problem-list-container">
                <ProblemList />
            </div>
        </div>
    </Nav>
</template>

<script lang="ts" setup>
import ProblemList from './list/ProblemList.vue'
import Nav from '@/shared/components/general/Nav.vue';

</script>

<style lang="scss" scoped>
.problem {
    @apply mt-8;
}
.problem-list-container {
    @apply mx-auto w-4/5 dark:text-teal-50;
}
</style>