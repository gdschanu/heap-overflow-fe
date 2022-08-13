<template>
  <div class="description__container">
    <table>
      <thead>
        <span class="description__container--title"><p>Description</p></span>
      </thead>
      <tbody>
        <tr>
          <td class="description__container--content"><MarkdownRender :description="description"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkdownRender from "./MarkdownRender.vue";

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

<style lang="scss">
.description__container {
  span {
    display: block;
    width: 20%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    padding: 4px 0;
    margin-left: -0.5px;
    background-color: #ccc;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    p {
      margin-left: 5px;
    }
  }

  table {
    width: 100%;
    border-top: unset;
    border-right: unset;
    border-left: unset;
  }

  .description__container--title {
    margin-top: 20px;
  }

  tbody {
    p {
      text-align: left;
      font-size: 14px;
      padding: 10px;
    }
  }

  tr,
  td {
    width: 100%;
    padding: 5px 30px;
  }

  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }
}
</style>
