<template>
    <div class="run-code-result">
        <div class="before-run" v-if="detailIsEmpty">
            <h3>Run your code to see result</h3>
        </div>
        <div class="ran" v-else>
            <h3 class="status">Accepted</h3>
            <Console :text="'[2,7,11,15]\n9'" />
        </div>
    </div>
</template>

<script>
import Console from "../../general/Console";

export default {
    name: "RunCode",
    props: {
        runCodeResult: Object,
    },
    components: {
        Console
    },
    computed: {
        detailIsEmpty() {
            return (
                Object.keys(this.runCodeResult).length === 0 &&
                this.runCodeResult.constructor === Object
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.run-code-result {
    .before-run {
    }
    .ran {
    }
}
</style>