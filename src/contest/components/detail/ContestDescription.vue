<template>
  <div class="description__container">
    <div class="container__title">
      <div class="title"><p>Description</p></div>
    </div>
    <div class="container__content">
      <div class="description">
        <MarkdownRender :description="description" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownRender from "@/shared/components/general/MarkdownRender.vue";

export default defineComponent({
  name: "ContestDescription",

  components: {
    MarkdownRender,
  },

  props: {
    description: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="scss" scoped>
.description__container {
  background-color: white;
  display: flex;
  width: 100%;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  .container__title,
  .container__content {
    width: 90%;
    min-height: 50px;
    color: #302f4e;
    font-weight: 500;
    margin-top: 20px;
  }

  .container__content {
    color: #7160bc;
    font-weight: 400;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
