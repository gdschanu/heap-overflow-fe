<template>
    <div class="problem-setting">
        <div class="choose-language">
            <Select
                :list="
                    languageList.map((language) => ({
                        name: languageConvert(language),
                        value: language,
                    }))
                "
                :selected="languageConvert($store.state.general.editorSettings.language)"
                @dataUpdated="languageChanged"
            />
        </div>
        <div
            class="retrieve-to-last-submission"
            :title="
                translate({
                    en: 'retrieve to the last submission',
                    vi: 'trở lại lần submit gần nhất',
                })
            "
        >
            <i class="fa-solid fa-right-from-bracket"></i>
        </div>
        <div
            v-if="$store.state.general.theme === 'light-theme'"
            @click="$store.dispatch('general/setTheme', 'dark-theme')"
            class="switch-theme-dark"
            :title="
                translate({
                    en: 'switch theme to dark',
                    vi: 'chuyển giao diện tối',
                })
            "
        >
            <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div
            v-if="$store.state.general.theme === 'dark-theme'"
            @click="$store.dispatch('general/setTheme', 'light-theme')"
            class="switch-theme-light"
            :title="
                translate({
                    en: 'switch theme to light',
                    vi: 'chuyển giao diện sáng',
                })
            "
        >
            <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div
            class="open-setting"
            :title="
                translate({
                    en: 'open setting',
                    vi: 'mở cài đặt',
                })
            "
            @click="showModal = true"
        >
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <div
            class="enter-full-screen"
            :title="
                translate({
                    en: 'enter full screen',
                    vi: 'toàn màn hình',
                })
            "
            v-if="!fullScreen"
            @click="$emit('enterFullScreen')"
        >
            <i class="fa-solid fa-expand"></i>
        </div>
        <div
            class="exit-full-screen"
            :title="
                translate({
                    en: 'exit full screen',
                    vi: 'thoát toàn màn hình',
                })
            "
            v-if="fullScreen"
            @click="$emit('exitFullScreen')"
        >
            <i class="fa-solid fa-compress"></i>
        </div>
        <ModalBox
            :isShow="showModal"
            modalWidth="400px"
            @closeModal="showModal = false"
        >
            <EditorSetting />
        </ModalBox>
    </div>
</template>

<script>
import Select from "../../general/Select.vue";
import EditorSetting from "./RightSettingEditor";
import ModalBox from "../../general/ModalBox";
import translate from "../../../helpers/translate";
import programmingLanguages from "../../../assets/common/programmingLanguage.json"

export default {
    name: "ProblemSetting",
    props: {
        editorSetting: Object,
        fullScreen: Boolean,
        languageList: Array,
    },
    data() {
        return {
            loading: false,
            showModal: false,
        };
    },
    components: {
        Select,
        EditorSetting,
        ModalBox,
    },
    methods: {
        languageChanged(item) {
            this.$store.dispatch("general/setEditorSettings", {
                language: item.value,
            });
        },
        languageConvert(language) {
            return programmingLanguages.filter((programmingLanguage) => programmingLanguage.value === language)[0].name;
        },
        translate(input) {
            return translate(input);
        },
    },
};
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
.problem-setting > * {
    padding: 0 10px;
}
.problem-setting:hover {
    cursor: pointer;
}
</style>