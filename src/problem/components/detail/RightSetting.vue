<template>
    <div class="problem-setting">
        <div class="choose-language">
            <Select :list="
                languageList.map((language) => ({
                    name: languageConvert(language),
                    value: language,
                }))
            " :selected="languageConvert($store.state.problemStore.editorSettings.language)"
                @dataUpdated="languageChanged" />
        </div>
        <!-- <div class="retrieve-to-last-submission" title="retrieve to the last submission">
            <i class="fa-solid fa-right-from-bracket"></i>
        </div>
        <div @click="" class="switch-theme-dark" title="switch theme to dark">
            <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div class="open-setting" title="open setting" @click="showModal = true">
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div> -->
        <div class="enter-full-screen" title="enter full screen" v-if="!fullScreen" @click="$emit('enterFullScreen')">
            <i class="fa-solid fa-expand"></i>
        </div>
        <div class="exit-full-screen" title="thoát toàn màn hình" v-if="fullScreen" @click="$emit('exitFullScreen')">
            <i class="fa-solid fa-compress"></i>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Select from "../../components/common/Select.vue";
import programmingLanguages from "../../../shared/assets/json/programmingLanguage.json"
import { useStore } from "vuex";
import { PropType } from "vue";


const props = defineProps({
    fullScreen: Boolean,
    languageList: {
        type: Array as PropType<Array<string>>,
        required: true
    }
})

const store = useStore()

function languageChanged(item: { name: string, value: string }) {
    store.dispatch("problemStore/setEditorSettings", {
        language: item.value,
    });
}
function languageConvert(language: string) {
    return programmingLanguages.filter((programmingLanguage) => programmingLanguage.value === language)[0].name;
}
</script>

<style lang="scss" scoped>
.problem-setting {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: var(--normal-font-size);

    .choose-language {
        margin-right: auto;
        margin-left: 5px;
        padding: 0;
    }
}

.problem-setting>* {
    padding: 0 10px;
}

.problem-setting:hover {
    cursor: pointer;
}
</style>