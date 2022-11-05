<template>
  <div class="participant__container">
    <div class="header"><p>Participants</p></div>
    <div class="container__title">
      <div class="title--order"><p>No.</p></div>
      <div class="title--name"><p>Name</p></div>
    </div>
    <div
      v-if="participantList"
      class="container__content"
      v-for="(participant, index) in participantList"
      :key="index"
    >
      <div class="participant--order">{{ index + 1 }}</div>
      <div class="participant--name">{{ getUsername(participant) }}</div>
    </div>
    <span class="pagination">
      <Pagination :totalPages="totalPages" @pageClicked="toPage"/>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Participant } from "../../model/participant/participant";
import Pagination from "@/shared/components/general/Pagination.vue";

export default defineComponent({
  name: "ParticipantList",

  components: {
    Pagination,
  },

  props: {
    participantList: {
      type: Array,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  methods: {
    toPage(page: number) {
      console.log(page);
      this.$emit("pageChanged", page);
    },

    getUsername(participant: Participant) {
      // console.log(participant);
      return participant.getUsername();
    },
  },
});
</script>

<style lang="scss" scoped>
.participant__container {
  background-color: white;
  display: flex;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  padding: 20px;

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
    width: 100%;
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
  }

  .container__title {
    color: #302f4e;
    font-weight: 500;
  }
}

.pagination {
  margin-top: 10px;
}
</style>
