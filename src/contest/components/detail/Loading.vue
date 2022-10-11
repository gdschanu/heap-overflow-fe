<template>
  <div class="img__container">
    <img
      src="../../assets/CatLoading.gif"
      alt="loading-icon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
});
</script>

<style lang="scss" scoped>
.img__container {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;

  img {
    margin: 0 auto;
  }
}
</style>
