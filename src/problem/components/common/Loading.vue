<template>
    <section class="loading-screen">
        <div class="card">
            <div class="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "LoadingScreen",
};
</script>

<style scoped>
.loading-screen {
    display: flex;
    justify-content: center;
    align-items: center;
}
.loading-screen .card {
    display: flex;
    padding: 24px;
    border-radius: 5px;
    min-height: 300px;
    min-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loading-screen .loader {
    border-radius: 50%;
    position: relative;
    margin: 50px;
    display: inline-block;
    height: 0px;
    width: 0px;
}

.loading-screen .loader span {
    position: absolute;
    display: block;
    background: #ddd;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: -20px;
    perspective: 100000px;
}
.loading-screen .loader span:nth-child(1) {
    left: 60px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: 0s;
    background: #ff756f;
}
.loading-screen .loader span:nth-child(2) {
    left: 20px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: 0.2s;
    background: #ffde6f;
}
.loading-screen .loader span:nth-child(3) {
    left: -20px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: 0.4s;
    background: #01de6f;
}
.loading-screen .loader span:nth-child(4) {
    left: -60px;
    animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
    animation-delay: 0.6s;
    background: #6f75ff;
}

@keyframes bounce2 {
    0%,
    75%,
    100% {
        transform: translateY(0px);
    }
    25% {
        transform: translateY(-30px);
    }
}
</style>