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
            :code="$store.state.problemStore.currentProblemCode[problem.getId()]"
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
import { computed } from "vue";

const props = defineProps({
    fullScreen: Boolean,
    problem: {
        type: Problem,
        required: true
    }
})

const languages = computed(() => {
    return props.problem.getAllowedProgrammingLanguages()
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
        border-bottom: 1px solid black;
    }

    .editor {
        height: calc(100% + var(--nav-height) - 120px) !important;
    }

    .console {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: var(--nav-height);
        vertical-align: bottom;
        border-top: 1px solid black;
    }
}
</style>