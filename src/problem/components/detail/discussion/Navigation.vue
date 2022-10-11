<template>
    <div class="navigation">
        <NavigationButton
            :disabled="disabledLeftArrow ? true : false"
            @clicked="changeCurrentPage(currentPage - MAX_PAGE_SHOWED)"
        >
            <i class="fa-solid fa-angles-left"></i>
        </NavigationButton>
        <NavigationButton
            :disabled="disabledLeftArrow5 ? true : false"
            @clicked="changeCurrentPage(currentPage - 1)"
        >
            <i class="fa-solid fa-chevron-left"></i>
        </NavigationButton>
        <NavigationButton
            v-for="index of numberOfPageShowed"
            :key="index"
            :active="startPage + index - 1 === currentPage ? true: false"
            @clicked="changeCurrentPage(startPage + index - 1)"
        >
            {{startPage + index - 1}}
        </NavigationButton>
        <NavigationButton
            :disabled="disabledRightArrow ? true : false"
            @clicked="changeCurrentPage(currentPage + 1)"
        >
            <i class="fa-solid fa-angle-right"></i>
        </NavigationButton>
        <NavigationButton
            :disabled="disabledRightArrow5 ? true : false"
            @clicked="changeCurrentPage(currentPage + MAX_PAGE_SHOWED)"
        >
            <i class="fa-solid fa-angles-right"></i>
        </NavigationButton>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from "@vue/reactivity";
import { onMounted } from "vue";
import NavigationButton from "./NavigationButton.vue"

const emit = defineEmits(['pageChanged'])

const MIN_PAGE = ref(1)
const MAX_PAGE_SHOWED = ref(5)
const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    maxPage: {
        type: Number,
        required: true
    },
})
const numberOfPage = computed(() => {
    return props.maxPage - MIN_PAGE.value + 1
})

const MAX_PAGE = computed(() => numberOfPage.value + MIN_PAGE.value - 1)

const numberOfPageShowed: Ref<number> = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return numberOfPage.value
    else
        return MAX_PAGE_SHOWED.value
})

const startPage: Ref<number> = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return 1
    else
        if (props.currentPage <= MAX_PAGE.value - numberOfPageShowed.value)
            return props.currentPage
        else
            return MAX_PAGE.value - numberOfPageShowed.value + 1
})

const endPage: Ref<number> = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return numberOfPageShowed.value
    else
        if (props.currentPage <= MAX_PAGE.value - numberOfPageShowed.value)
            return props.currentPage + MAX_PAGE_SHOWED.value - 1
        else
            return MAX_PAGE.value
})

const disabledLeftArrow = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return true
    return props.currentPage <= MIN_PAGE.value + MAX_PAGE_SHOWED.value - 1
})

const disabledLeftArrow5 = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return true
    return props.currentPage <= MIN_PAGE.value
})

const disabledRightArrow = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return true
    return props.currentPage >= MAX_PAGE.value
})

const disabledRightArrow5 = computed(() => {
    if (numberOfPage.value <= MAX_PAGE_SHOWED.value)
        return true
    return props.currentPage >= MAX_PAGE.value - MAX_PAGE_SHOWED.value + 1
})

function changeCurrentPage(newPage: number) {
    emit('pageChanged', newPage)
}

onMounted(() => {
    validatePage()
})

function validatePage() {
    if (props.maxPage < MIN_PAGE.value)
        throw new Error('Invalid maxPage')
    if (props.currentPage < MIN_PAGE.value || props.currentPage > props.maxPage)
        throw new Error('Invalid currentPage')
    return true
}
</script>

<style lang="scss" scoped>
.navigation {
    --navigation-height: 24px;
    display: flex;
    height: var(--navigation-height);
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
</style>