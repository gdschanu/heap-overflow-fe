<template>
  <div class="rank__container">
    <div class="header"><p>Rank</p></div>
    <div class="container__title">
      <div class="title--order"><p>#</p></div>
      <div class="title--"><p>Name</p></div>
    </div>
    <div
      class="container__content"
      v-for="participants in rankList"
      :key="participant.getRank()"
    >
      <div class="participant--order">{{ participant.getRank() }}</div>
      <div class="participant--name">coderName</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Participant } from "../../model/participant/participant";

export default defineComponent({
  name: "RankList",
  props: {
    rankList: {
      type: Array,
      default: [] as Participant[],
    },
  },
});
</script>

<style lang="scss" scoped>
.rank__container {
  background-color: white;
  display: flex;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  .header {
    color: #302f4e;
    font-weight: 500;
  }

  .container__title,
  .container__content {
    display: grid;
    grid-template-columns: 30% 70%;
    justify-items: center;
    align-items: center;
    width: 90%;
    min-height: 50px;
  }

  .container__title {
    margin-top: 10px;
  }

  .container__content {
    color: #7160bc;
    border: 1px solid #c9c2e0;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .container__title {
    color: #302f4e;
    font-weight: 500;
  }
}
</style>
