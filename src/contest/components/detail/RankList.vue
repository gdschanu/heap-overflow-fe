<template>
  <div class="rank__container">
    <table>
      <thead>
        <span class="rank__container--title"><p>Rank</p></span>
        <tr>
          <th class="rank__container--title-order">#</th>
          <th class="rank__container--title-name">Coder Name</th>
        </tr>
      </thead>
      <!-- v-for in list rank -->
      <tbody>
        <tr v-for="(rank, index) in 10">
          <td class="rank--order">{{ index + 1 }}</td>
          <td class="rank--name">coderName</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RankList",
  props: {
    rankList: {
      type: Array,
      default: []
    }
  }
});
</script>

<style lang="scss">
.rank__container {
  span {
    display: block;
    width: 101%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    padding: 4px 0;
    margin-left: -1px;
    background-color: #ccc;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    p {
      margin-left: 5px;
    }
  }

  table {
    border-top: unset;
    border-right: unset;
    border-left: unset;
  }

  .rank__container--title {
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
    padding: 5px 30px;
  }

  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }

  .rank__container--title-name {
    width: 100%;
  }
}
</style>
