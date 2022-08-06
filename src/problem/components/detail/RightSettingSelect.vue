<template>
    <div class="select" @click="showList = !showList">
        <p>
            {{ selected }}
            <i :class="'fas fa-caret-down ' + (showList ? 'flipped' : '')"></i>
        </p>
        <div class="list" v-show="showList">
            <div
                v-for="(item, index) in selectList"
                :key="index"
                :class="'option ' + (selected === item ? 'selected' : '')"
                :selected="selected === item"
                @click="dataUpdated(item)"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            showList: false,
        };
    },
    props: {
        selectList: Array,
        selected: String,
    },
    methods: {
        dataUpdated(item) {
            this.$emit("dataUpdated", item);
        },
    },
};
</script>

<style lang="scss" scoped>
.select {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid var(--line-color);
    p {
        display: block;
        text-align: center;
        width: 100%;
        overflow: hidden;
        i {
            float: right;
            margin-top: 2px;
            margin-right: 5px;
        }
        .flipped {
            transform: rotate(180deg);
        }
    }
    .list {
        position: absolute;
        z-index: 1;
        border: 1px solid var(--line-color);
        border-top: none;
        top: calc(100% + 1px);
        left: -1px;
        width: calc(100% + 2px);
        background-color: var(--container-color);
        .option {
            padding: 5px;
        }
        .option:hover {
            text-decoration: underline;
        }
        .selected {
            text-decoration: underline;
        }
    }
}
</style>