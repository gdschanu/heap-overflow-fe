<template>
    <div class="nav-layout">
        <div class="nav-container">
            <div class="nav">
                <img src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="logo">
                <h2>Hanu Code</h2>
            </div>
        </div>
        <div class="content-container">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.nav-layout {
    border: 1px solid red;
    display: flex;
}

.nav-container {
    position: relative;
    border: 1px solid blue;
    .nav {
        position: sticky;
        top: 0;
        width: 200px;
    }
}

.content-container {
    border: 1px solid green;
    flex: 1 1 auto;
}
</style>