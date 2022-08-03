<template>
    <div class="nav-container">
        <div class="nav">
            <img src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="logo">
            <h2>Hanu Code</h2>
        </div>
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.nav-container {
    border: 1px solid red;
    @apply flex;
}

.nav {
    border: 1px solid blue;
    @apply w-20 lg:w-72 transition-all;
}

.content-container {
    border: 1px solid green;
    @apply flex-auto;
}
</style>