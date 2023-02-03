<template>
    <div class="problem-right">
        <Setting
            class="setting"
            :fullScreen="fullScreen"
            :languageList="languages"
            @enterFullScreen="$emit('enterFullScreen')"
            @exitFullScreen="$emit('exitFullScreen')"
        />
        <MonacoEditor
            class="editor"
            :language="$store.state.problemStore.editorSettings.language"
            :code="currentCodes[store.state.problemStore.editorSettings.language]"
            @dataUpdated="handleCodeUpdate"
        />
        <Console class="console" :problem="problem"/>
    </div>
</template>

<script lang="ts" setup>
import Setting from "./RightSetting.vue";
import Console from "./RightConsole.vue";
import MonacoEditor from "./MonacoEditor.vue";
import Problem from "@/problem/model/problem";
import { computed, PropType, Ref, ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const currentCodes = ref(store.state.problemStore.currentProblemCode.codes)

const props = defineProps({
    fullScreen: Boolean,
})

const languages = computed(() => {
    return problem.value.getAllowedProgrammingLanguages()
})

function handleCodeUpdate(code: string) {
    currentCodes.value[store.state.problemStore.editorSettings.language] = code
    store.dispatch('problemStore/setCurrentProblemCode', {
        id: store.state.problemStore.problem.getId(),
        codes: currentCodes.value
    })
}
</script>

<style lang="scss" scoped>
.problem-right {
    position: relative;
    width: 100%;
    height: 100%;

    .setting {
        width: 100%;
        height: var(--nav-height);
        @apply border-b border-slate-300 dark:border-slate-700;
    }

    .editor {
        height: calc(100% - 2*var(--nav-height)) !important;
    }

    .console {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--nav-height);
        vertical-align: bottom;
        @apply border-t border-slate-300 dark:border-slate-700;
    }
}
</style>