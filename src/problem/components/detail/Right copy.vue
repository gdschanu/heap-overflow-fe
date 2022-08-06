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
            :language="$store.state.general.editorSettings.language"
            :code="$store.state.problem.currentProblemsCode[problem.getId()]"
            @dataUpdated="
                $store.dispatch('problem/setCurrentProblemsCode', {
                    id: problem.getId(),
                    code: $event,
                })
            "
        />
        <Console class="console" :problem="problem"/>
    </div>
</template>

<script>
import Setting from "./RightSetting";
import Console from "./RightConsole";
import MonacoEditor from "./MonacoEditor";
import translate from "../../../helpers/translate";

export default {
    name: "ProblemRight",
    props: {
        fullScreen: Boolean,
        problem: Object,
    },
    data() {
        return {};
    },
    components: {
        Setting,
        Console,
        MonacoEditor,
    },
    computed: {
        languages() {
            return this.problem.getAllowedProgrammingLanguages();
        },
        translate() {
            return translate()
        }
    },
    created() {

    }
};
</script>

<style lang="scss" scoped>
.problem-right {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--container-color);
    .setting {
        width: 100%;
        height: var(--nav-height);
        border-bottom: 1px solid var(--stroke-color);
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
        border-top: 1px solid var(--stroke-color);
    }
}
</style>