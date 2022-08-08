<template>
    <div class="select" @click="isOpening = !isOpening">
        <p class="select__text">{{ selected === null ? text : selected }}</p>
        <span :class="isOpening ? 'select__icon--flipped' : 'select__icon'">
            <i class="fa-solid fa-chevron-down"></i>
        </span>
        <ul class="select__list" v-if="isOpening">
            <li
                v-for="item in list"
                :key="item.value"
                :class="
                    selected === item.name ? 'select__list__item--selected' : ''
                "
                @click="handleSelect(item)"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "Select",
    data() {
        return {
            isOpening: false,
        };
    },
    props: {
        list: {
            type: Array,
            default: [
                {
                    name: "", // to render
                    value: "", // to return
                },
            ],
        },
        text: {
            type: String,
            default: "choose one",
        },
        selected: {
            type: String,
            default: null,
        }, // name
    },
    methods: {
        handleSelect(item) {
            this.$emit("dataUpdated", item);
        },
        getValue(name) {
            const item = this.list.find((item) => item.name === name);
            if (value) return item.value;
            else return "text";
        },
    },
};
</script>

<style lang="scss" scoped>
.select {
    position: relative;
    width: fit-content;
    min-width: 5rem;
    padding: 8px;
    margin: 5px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    justify-content: space-between;
    cursor: pointer;
    &__text {
        margin-right: 5px;
    }
    &__icon {
        display: flex;
        align-items: center;
        transform: rotate(0deg);
        transition: transform 0.4s;
    }
    &__icon--flipped {
        display: flex;
        align-items: center;
        transform: rotate(180deg);
        transition: transform 0.4s;
    }
    &__list {
        position: absolute;
        z-index: 1000;
        top: calc(100% + 5px);
        left: 0;
        padding: 8px;
        min-width: 5rem;
        border: 1px solid black;
        background-color: white;
        border-radius: 10px;
        &__item--selected {
            font-weight: bold;
        }
    }
}
</style>