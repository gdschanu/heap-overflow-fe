<template>
  <div class="bar__container">
    <div class="process__container">
      <slot name="process--content"></slot>
    </div>
    <div class="topPerform__container">
      <slot name="topPerform--content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProgressTable from "./ProgressTable.vue";

export default defineComponent({
  name: "RightBarLayout",

  components: {
    ProgressTable,
  },
});
</script>

<style lang="scss" scoped>
.bar__container {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 95vh;
  width: 30%;
  margin: auto 0 auto auto;
  margin-top: 4.3vh;
  // overflow: hidden;

  .process__container {
    height: 35%;
    width: 90%;
    padding: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 20px;
    background-color: white;
  }

  .topPerform__container {
    height: 55%;
    width: 90%;
    padding: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 20px;
    background-color: white;
  }
}
</style>
