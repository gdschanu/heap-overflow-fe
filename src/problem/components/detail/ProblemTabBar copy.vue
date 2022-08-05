<template>
    <div :class="'tab__bar--special'">
        <div class="nav">
            <div
                v-for="(item, index) in tabBarList"
                :class="'nav-item ' + (selected === index ? 'selected' : '')"
                :key="index"
                @click="switchTab(index)"
            >
                <div class="wrapper">
                    <slot
                        :name="rmSpace(item) + '-icon'"
                        class="nav__icon"
                    ></slot>
                    <span class="nav-item-name">{{ translate(item) }}</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div
                v-for="(item, index) in tabBarList"
                :key="index"
                :class="'content-item ' + item"
                v-show="index === selected"
            >
                <slot :name="rmSpace(item)"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { removeSpace } from "../../../utils/removeSpace";
import translate from "../../../helpers/translate";

export default {
    name: "TabBar",
    props: {
        tabBarList: Array,
        notBorder: String,
        selected: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        rmSpace(str) {
            // remove space in string
            return removeSpace(str);
        },
        translate(input) {
            return translate(input, "en");
        },
        switchTab(index) {
            this.$emit("selectUpdated", index);
        },
    },
    mounted() {
        const nav = this.$el.getElementsByClassName("nav")[0];
        const observer = new ResizeObserver(() => {
            if (nav.clientWidth / this.tabBarList.length < 120) {
                nav.classList.add("hide-item-name");
            } else {
                nav.classList.remove("hide-item-name");
            }
        });
        observer.observe(nav, {
            attributes: true,
        });
    },
};
</script>

<style lang="scss">
.tab__bar--special {
    height: 100%;
    background-color: var(--container-color);
    .nav {
        display: table;
        position: relative;
        height: var(--nav-height);
        table-layout: fixed;
        font-weight: var(--font-semi-bold);
        overflow: hidden;
        .nav-item {
            position: relative;
            display: table-cell;
            width: 2%;
            text-align: center;
            line-height: var(--nav-height);
            border-bottom: 1px solid var(--stroke-color);
            background-color: var(--container-color-darker);
            cursor: pointer;
            .wrapper {
                position: relative;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                span {
                    margin-left: 5px;
                }
            }
        }
        .selected {
            color: var(--title-color);
        }
        .selected:after {
            position: absolute;
            content: "";
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            bottom: 0;
            height: 4px;
            border-radius: 5px 5px 0px 0px;
        }
    }
    .hide-item-name {
        .nav-item-name {
            display: none;
        }
    }
    .content {
        height: calc(100% - var(--nav-height));
        background-color: var(--container-color);
        .content-item {
            overflow-y: auto;
            height: 100%;
        }
    }

    // scroll bar
    .content {
        .content-item::-webkit-scrollbar-thumb {
            display: none;
        }
        .content-item::-webkit-scrollbar:vertical {
            border-left: 1px solid var(--stroke-color);
            background: var(--container-color);
        }
        .content-item::-webkit-scrollbar:horizontal {
            border-top: 1px solid var(--stroke-color);
            background: var(--container-color);
        }
    }
}

.light-theme .selected:after {
    background-color: var(--first-color-alt);
}
.dark-theme .selected:after {
    background-color: #fff;
}
</style>