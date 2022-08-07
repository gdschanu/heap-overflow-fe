<template>
    <div class="auth-container">
        <div class="content-container">
            <slot name="layoutcontent"></slot>
        </div>
        <div class="img-container">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthLayout",
};
</script>

<style lang="scss" scoped>
.auth-container {
    @apply flex justify-between h-screen;
}
.content-container {
    @apply h-full p-5 w-1/2 bg-white shadow-2xl;
}
.img-container {
    @apply flex justify-center items-center w-3/5 h-full p-3 overflow-hidden;
}
@media only screen and (max-width: 850px) {
    .content-container {
        width: 100%;
    }
    .img-container {
        display: none;
    }
}
</style>
