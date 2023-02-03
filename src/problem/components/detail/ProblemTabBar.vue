<template>
    <div :class="'tab__bar--special'">
        <div class="problem-tabbar-nav" ref="nav">
            <div v-for="(item, index) in tabBarList" :class="'nav-item ' + (selected === index ? 'selected' : '')"
                :key="index" @click="switchTab(index)">
                <div class="wrapper">
                    <slot :name="rmSpace(item) + '-icon'" class="nav__icon"></slot>
                    <span class="nav-item-name">{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="content">
            <template v-for="(item, index) in tabBarList" :key="index">
                <div :class="'content-item ' + item" v-show="index === selected">
                    <slot :name="rmSpace(item)"></slot>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { removeSpace } from "../../utils/removeSpace";
import { PropType } from "vue";

const emit = defineEmits(['selectUpdated'])
const nav = ref<HTMLElement>()

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
    const navRef = nav.value;
    if (navRef) {
        const observer = new ResizeObserver(() => {
            
            if (navRef.clientWidth / props.tabBarList.length < 120) {
                navRef.classList.add("hide-item-name");
            } else {
                navRef.classList.remove("hide-item-name");
            }
            
        });
        observer.observe(navRef);
    }
})
</script>

<style lang="scss" scoped>
.tab__bar--special {
    height: 100%;

    .problem-tabbar-nav {
        display: table;
        position: relative;
        height: var(--nav-height);
        table-layout: fixed;
        overflow: hidden;

        .nav-item {
            @apply border-b border-slate-300 text-slate-500 dark:border-slate-700
            ;
            position: relative;
            display: table-cell;
            width: 2%;
            text-align: center;
            line-height: var(--nav-height);
            cursor: pointer;
            font-weight: bold;
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
            @apply text-black dark:text-slate-50;
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
            @apply bg-slate-900 dark:bg-slate-100;
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