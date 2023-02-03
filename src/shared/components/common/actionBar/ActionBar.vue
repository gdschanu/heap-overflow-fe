<template>
  <div class="coder flex justify-end items-center gap-8">
    <template v-if="coder">
      <ActionBarNotification />
      <div class="flex items-center gap-3">
        <el-dropdown trigger="click">
          <div class="flex items-center gap-3 cursor-pointer">
            <el-avatar :src="coder.avatar" />
            <p class="text-button">{{ coder.name }}</p>
          </div>
          <template #dropdown>
            <div class="py-2">
              <ActionBarProfile class="px-6 py-2 bg-button" />
              <ActionBarLogout class="px-6 py-2 bg-button" />
            </div>
          </template>
        </el-dropdown>
        <el-dropdown trigger="click">
          <i
            class="fa-solid fa-chevron-down dark:bg-slate-800 dark:text-slate-50 icon-button"
          ></i>
          <template #dropdown>
            <div class="py-2">
              <ActionBarTheme class="px-6 py-2 bg-button" />
            </div>
          </template>
        </el-dropdown>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center items-center gap-3">
        <Button
          text="register"
          type="secondary"
          @click="
            $router.push({
              name: 'Register',
              query: { redirect: $route.fullPath },
            })
          "
        />
        <p>or</p>
        <Button
          text="Sign in"
          @click="
            $router.push({
              name: 'Login',
              query: { redirect: $route.fullPath },
            })
          "
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ElAvatar, ElDropdown } from "element-plus";
import { useStore } from "vuex";
import { computed, ComputedRef } from "vue";
import Coder from "@/coder/coder";
import ActionBarTheme from "./ActionBarTheme.vue";
import ActionBarNotification from "./ActionBarNotification.vue";
import ActionBarProfile from "./ActionBarProfile.vue";
import ActionBarLogout from "./ActionBarLogout.vue";
import Button from "../../general/Button.vue";

const store = useStore();
const coder: ComputedRef<Coder | null> = computed(
  () => store.state.coderStore.coder
);
</script>

<style scoped>
.text-button {
  @apply transition cursor-pointer
  text-slate-900 hover:text-slate-800 active:text-slate-700
  dark:text-slate-50 dark:hover:text-slate-200 dark:active:text-slate-300;
}

.bg-button {
  @apply transition cursor-pointer
  bg-slate-50 hover:bg-slate-200 active:bg-slate-300
  dark:bg-slate-900 dark:hover:bg-slate-800 dark:active:bg-slate-700;
}
</style>
