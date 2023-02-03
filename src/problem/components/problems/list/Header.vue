<template>
  <div class="flex items-center gap-3">
    <el-select
      v-model="difficultyFilter"
      placeholder="Difficulty"
      clearable
      class="w-36"
      size="large"
    >
      <el-option
        v-for="difficulty in Object.keys(Difficulty)"
        :key="difficulty"
        :value="difficulty"
      >
        {{ difficulty }}
      </el-option>
    </el-select>
    <el-select
      v-model="statusFilter"
      placeholder="Status"
      class="w-36"
      clearable
      size="large"
    >
      <el-option
        v-for="status in Object.keys(ProblemStatus)"
        :key="status"
        :value="status"
      >
        {{ status }}
      </el-option>
    </el-select>
    <InputText placeholder="Search problem" class="ml-auto">
      <template #prefix>
        <i class="fa-solid fa-magnifying-glass text-slate-500"></i>
      </template>
    </InputText>
  </div>
</template>

<script lang="ts" setup>
import Difficulty from "@/problem/model/difficulty";
import { ProblemStatus } from "@/problem/model/problemStatus";
import InputText from "@/shared/components/general/InputText.vue";
import { ElSelect, ElOption, ElInput } from "element-plus";
import { ref } from "vue";

const difficultyFilter = ref<String>("")
const statusFilter = ref<String>("")

</script>

<style scoped></style>
