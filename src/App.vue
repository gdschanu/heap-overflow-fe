<template>
  <div id="main">
    <!-- <router-view /> -->
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
    <Alert
      :isShow="$store.state.alert.isAlert"
      :text="$store.state.alert.message"
      :type="$store.state.alert.type"
      @close="$store.dispatch('closeAlert')"
    />
  </div>
</template>

<script lang="ts" setup>
import Alert from "./shared/components/general/Alert.vue";
import { onMounted } from "vue";
import themeSetup from "./shared/helpers/theme";
import autoLogin from "@/shared/helpers/autoLogin";
import useLayout from "./shared/layout/layout";

const layout = useLayout();
themeSetup();

onMounted(async () => {
  await autoLogin();
});
</script>

<style lang="scss"></style>
