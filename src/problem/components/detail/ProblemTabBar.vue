<template>
    <div :class="'tab__bar--special'">
        <div class="problem-tabbar-nav">
            <div v-for="(item, index) in tabBarList" :class="'nav-item ' + (selected === index ? 'selected' : '')"
                :key="index" @click="switchTab(index)">
                <div class="wrapper">
                    <slot :name="rmSpace(item) + '-icon'" class="nav__icon"></slot>
                    <span class="nav-item-name">{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div v-for="(item, index) in tabBarList" :key="index" :class="'content-item ' + item"
                v-show="index === selected">
                <slot :name="rmSpace(item)"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { removeSpace } from "../../utils/removeSpace";
import { PropType } from "vue";

const emit = defineEmits(['selectUpdated'])

const props = defineProps({
    tabBarList: {
        type: Array as PropType<Array<string>>,
        required: true
    },
    notBorder: String,
    selected: {
        type: Number,
        default: 0
    }
})

function rmSpace(str: string) {
    return removeSpace(str);
}
function switchTab(index: number) {
    emit("selectUpdated", index);
}

onMounted(() => {
    const navs = document.getElementsByClassName("problem-tabbar-nav");

    for(let nav of navs) {
        const observer = new ResizeObserver(() => {
            if (nav.clientWidth / props.tabBarList.length < 120) {
                nav.classList.add("hide-item-name");
            } else {
                nav.classList.remove("hide-item-name");
            }
        });
        observer.observe(nav);
    }

})
</script>

<style lang="scss">
.tab__bar--special {
    height: 100%;

    .problem-tabbar-nav {
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
            border-bottom: 1px solid;
            cursor: pointer;
            color: #5a5a5a;

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

        .selected:after {
            position: absolute;
            content: "";
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            bottom: -1px;
            height: 4px;
            border-radius: 5px 5px 0px 0px;
            background-color: black;
        }
    }

    .hide-item-name {
        .nav-item-name {
            display: none;
        }
    }

    .content {
        height: calc(100% - var(--nav-height));


        .content-item {
            overflow-y: auto;
            height: 100%;
        }
    }
}
</style>