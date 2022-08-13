<template>
    <div class="tab-navigate">
        <TabNavigateItem :disabled="currentTabNavigateStart === 1 ? true : false"
            @clicked="handleTabNavigateMoving(1, NUMBER_OF_TAB_NAVIGATE_ITEM)"><i class="fa-solid fa-angles-left"></i>
        </TabNavigateItem>
        <TabNavigateItem :disabled="currentTabNavigateStart === 1 ? true : false"
            @clicked="handleTabNavigateMoving(currentTabNavigateStart - 1, currentTabNavigateEnd - 1)"><i
                class="fa-solid fa-angle-left"></i>
        </TabNavigateItem>
        <!-- <TabNavigateItem :active="true">1</TabNavigateItem> -->
        <template v-if="numberOfPage <= NUMBER_OF_TAB_NAVIGATE_ITEM">
            <TabNavigateItem v-for="page in numberOfPage" :key="page" :active="page - 1 === currentPage"
                @clicked="gotoPage(page)">{{ page }}
            </TabNavigateItem>
        </template>
        <template v-else>
            <template v-for="page in numberOfPage" :key="page">
                <TabNavigateItem v-if="page >= currentTabNavigateStart && page <= currentTabNavigateEnd"
                    :active="page - 1 === currentPage" @clicked="gotoPage(page)">
                    {{ page }}
                </TabNavigateItem>
            </template>
        </template>

        <TabNavigateItem :disabled="currentTabNavigateEnd === numberOfPage ? true : false"
            @clicked="handleTabNavigateMoving(currentTabNavigateStart + 1, currentTabNavigateEnd + 1)"><i
                class="fa-solid fa-angle-right"></i>
        </TabNavigateItem>
        <TabNavigateItem :disabled="currentTabNavigateEnd === numberOfPage ? true : false"
            @clicked="handleTabNavigateMoving(numberOfPage - NUMBER_OF_TAB_NAVIGATE_ITEM + 1, numberOfPage)"><i
                class="fa-solid fa-angles-right"></i>
        </TabNavigateItem>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "@vue/reactivity";
import { onBeforeUpdate, ref, watch } from "vue";
import TabNavigateItem from "./TabNavigateItem.vue"

const NUMBER_OF_TAB_NAVIGATE_ITEM = ref(5)

const props = defineProps({
    numberOfProblem: {
        type: Number,
        required: true
    },
    perPage: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
})

const numberOfPage = computed(() => {
    return Math.floor(props.numberOfProblem / props.perPage) + 1
})

const calculateNumberOfPage = computed(() => {
    return Math.floor(props.numberOfProblem / props.perPage) + 1
})

const currentTabNavigateStart = ref(props.currentPage + 1 - Math.floor(NUMBER_OF_TAB_NAVIGATE_ITEM.value / 2))
const currentTabNavigateEnd = ref(props.currentPage + 1 + Math.floor(NUMBER_OF_TAB_NAVIGATE_ITEM.value / 2))

onBeforeUpdate(() => {
    if (currentTabNavigateStart.value < 1) {
        currentTabNavigateStart.value = 1
        currentTabNavigateEnd.value = NUMBER_OF_TAB_NAVIGATE_ITEM.value
    }

    if (currentTabNavigateEnd.value > calculateNumberOfPage.value) {
        currentTabNavigateEnd.value = calculateNumberOfPage.value
        currentTabNavigateStart.value = calculateNumberOfPage.value - NUMBER_OF_TAB_NAVIGATE_ITEM.value + 1
    }
})

function handleTabNavigateMoving(start: number, end: number) {
    currentTabNavigateStart.value = start
    currentTabNavigateEnd.value = end
}

const emit = defineEmits(['gotoPage'])
function gotoPage(page: number) {
    emit('gotoPage', page - 1)
}
</script>

<style lang="scss" scoped>
.tab-navigate {
    @apply flex justify-center mt-2;
}
</style>