<template>
  <div class="flex justify-between items-center px-3">
    <div class="mr-auto">
      <el-select
				v-model="store.state.problemStore.editorSettings.language"
				class="dark:border dark:border-slate-700 rounded-lg"
				size="large"
			>
				<el-option
					v-for="language in problem.getAllowedProgrammingLanguages()"
					:key="language"
					:value="language"
					:label="languageConvert(language)"
				/>
			</el-select>
    </div>
    <div
      class="cursor-pointer"
      title="enter full screen"
      v-if="!fullScreen"
      @click="$emit('enterFullScreen')"
    >
      <i class="fa-solid fa-expand"></i>
    </div>
    <div
      class="cursor-pointer"
      title="thoát toàn màn hình"
      v-if="fullScreen"
      @click="$emit('exitFullScreen')"
    >
      <i class="fa-solid fa-compress"></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Select from "../../components/common/Select.vue";
import { ElSelect, ElOption } from "element-plus";
import programmingLanguages from "../../../shared/assets/json/programmingLanguage.json";
import { useStore } from "vuex";
import { PropType, ref, computed, ComputedRef } from "vue";
import Problem from "@/problem/model/problem";

const store = useStore();
const problem = computed(() => store.state.problemStore.problem) as ComputedRef<Problem>

const props = defineProps({
  fullScreen: Boolean,
  languageList: {
    type: Array as PropType<Array<string>>,
    required: true,
  },
});

function languageConvert(language: string) {
  return programmingLanguages.filter(
    (programmingLanguage) => programmingLanguage.value === language
  )[0].name;
}
</script>

<style lang="scss" scoped>
</style>
