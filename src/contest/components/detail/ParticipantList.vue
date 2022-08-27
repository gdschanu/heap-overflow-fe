<template>
  <div class="participant__container">
    <table>
      <thead>
        <span class="participant__container--title"><p>Participant</p></span>
        <tr>
          <th class="participant__container--title-order">#</th>
          <th class="participant__container--title-name">Coder Name</th>
        </tr>
      </thead>
      <!-- v-for in list participant -->
      <tbody>
        <tr v-for="(participant, index) in ParticipantList" :key="index">
          <td class="participant--order">{{ index + 1 }}</td>
          <td class="participant--name">coderName</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Participant } from "../../model/participant/participant"

export default defineComponent({
  name: "ParticipantList",
  props: {
    ParticipantList: {
      type: Array,
      default: [] as Participant[],
    },
  },
});
</script>

<style lang="scss">
.participant__container {
  span {
    display: block;
    width: 101%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    padding: 4px 0;
    margin: -1px;
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

  .participant__container--title {
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
    padding: 5px 50px;
  }

  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }

  .participant__container--title-name {
    width: 90%;
  }

  .participant__container--title-order {
    width: 10%;
  }
}
</style>
