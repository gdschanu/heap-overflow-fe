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
            :code="$store.state.problemStore.currentProblemCode.code"
            @dataUpdated="$store.dispatch('problemStore/setCurrentProblemCode', {
                id: problem.getId(),
                code: $event,
            })"
        />
        <Console class="console" :problem="problem"/>
    </div>
</template>

<script lang="ts" setup>
import Setting from "./RightSetting.vue";
import Console from "./RightConsole.vue";
import MonacoEditor from "./MonacoEditor.vue";
import Problem from "@/problem/model/problem";
import { computed, PropType, Ref } from "vue";
import { useStore } from "vuex";

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>

const props = defineProps({
    fullScreen: Boolean,
})

const languages = computed(() => {
    return problem.value.getAllowedProgrammingLanguages()
})
</script>

<style lang="scss" scoped>
.problem-right {
    position: relative;
    width: 100%;
    height: 100%;

    .setting {
        width: 100%;
        height: var(--nav-height);
        border-bottom: 2px solid #9288c1;
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
        border-top: 2px solid #9288c1;
    }
}
</style>