<template>
    <div class="problem-not-found">
        <h1>Problem not found :(</h1>
        <p>This problem isn't exist, or it has been deleted</p>
        <Button text="Back to problem" @clicked="$router.push('/problem')" type="secondary" class="problem-not-found__button" />
    </div>
</template>

<script lang="ts" setup>
import Button from "../../../shared/components/general/Button.vue"

</script>

<style lang="scss" scoped>
.problem-not-found {
    width: 100%;
    height: 100%;

    h1 {
        font-size: 3rem;
        text-align: center;
        margin-top: 20vh;
    }

    p {
        text-align: center;
        margin-top: 3vh;
    }

    .problem-not-found__button {
        display: block;
        margin: auto;
        margin-top: 3vh;
    }
}
</style>