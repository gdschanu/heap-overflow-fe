<template>
    <div class="problem-not-found">
        <h1>Problem not found :(</h1>
        <p>This problem isn't exist, or it has been deleted</p>
        <p class="button" @click="$router.push('/problem')">
            <span>Back to problem page</span>
        </p>
    </div>
</template>

<script>
export default {
    name: "ProblemNotFound",
};
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
    .button {
        display: block;
        margin: auto;
        margin-top: 10vh;
        padding: 5px;
        width: fit-content;
        text-align: center;
        border: 1px solid var(--line-color);
        transition: all 0.2s;
        background-color: var(--container-color-darker);
        span {
            line-height: 28px;
        }
    }
    .button:hover {
        cursor: pointer;
        background-color: var(--container-color);
    }
}

.light-theme .problem-not-found .button:hover {
    box-shadow: 2px 2px 1px rgb(207, 207, 207);
}
.dark-theme .problem-not-found .button:hover {
    box-shadow: 2px 2px 1px rgb(58, 58, 58);
}
</style>