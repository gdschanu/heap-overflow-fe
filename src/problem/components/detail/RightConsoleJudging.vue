<template>
    <div class="judging">
        <h3>Judging <span class="judging__dot">.</span>
            <span class="judging__dot">.</span>
            <span class="judging__dot">.</span>
        </h3>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.judging {
    text-align: center;

    &__dot {
        position: relative;
        margin: 5px;
        animation: bounce 1s infinite ease-in-out;
    }

    &__dot:nth-child(1) {
        animation-delay: 0s;
    }

    &__dot:nth-child(2) {
        animation-delay: 0.1s;
    }
    
    &__dot:nth-child(3) {
        animation-delay: 0.2s;
    }

    @keyframes bounce {
        0% {
            bottom: 0;
        }
        35% {
            bottom: 10px;
        }
        70% {
            bottom: 0;
        }
    }
}
</style>