<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <div class="title--name"><p class="item--title">Name</p></div>
      <div class="title--author"><p class="item--title">Participants</p></div>
      <div class="title--start"><p class="item--title">Start at</p></div>
      <div class="title--end"><p class="item--title">End at</p></div>
      <div class="title--problems"><p class="item--title">Problems</p></div>
      <div class="title--status"><p class="item--title">Status</p></div>
    </div>
    <div
      class="wrapper__content"
      v-for="(contest, index) in contests"
      @click="toContest(contest)"
    >
      <div class="content--name">
        <p class="item--content" style="color: #02a9b5; font-weight: bold">
          {{ contest.getName() }}
        </p>
      </div>
      <div v-if="getNumberOfParticipants(contest)" class="content--participant">
        <p class="item--content">{{ numberOfParticipants }}</p>
      </div>
      <div class="content--start">
        <p class="item--content">{{ startTime(contest) }}</p>
      </div>
      <div class="content--end">
        <p class="item--content">{{ endTime(contest) }}</p>
      </div>
      <div class="content--problems">
        <p class="item--content">{{ contest._problems.length }}</p>
      </div>
      <div class="content--status">
        <p
          class="item--content"
          style="color: #62d162; font-weight: bold"
          v-if="contestStatus(contest) === 'RUNNING'"
        >
          {{ contestStatus(contest) }}
        </p>
        <p
          class="item--content"
          style="color: #d66779; font-weight: bold"
          v-if="contestStatus(contest) === 'ENDED'"
        >
          {{ contestStatus(contest) }}
        </p>
        <p
          class="item--content"
          style="color: #e6b93e; font-weight: bold"
          v-if="contestStatus(contest) === 'INCOMING'"
        >
          {{ contestStatus(contest) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Contest } from "@/contest/model/contest/contest";
import { getParticipants } from "../../model/participant/domainLogic/participant";
import errorHandler from "@/shared/helpers/errorHandler";

export default defineComponent({
  name: "TableContest",

  props: {
    contests: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      numberOfParticipants: new Number(),
    };
  },

  methods: {
    startTime(contest: Contest) {
      const time = new Date(contest.getStartAt());
      return time.toLocaleString();
    },

    endTime(contest: Contest) {
      const time = new Date(contest.getEndAt());
      const string = `${time.getDate()}-${
        time.getMonth() + 1
      }-${time.getFullYear()} / ${time.getHours()}:${time.getMinutes()}`;
      return time.toLocaleString();
    },

    contestStatus(contest: Contest) {
      const startTime = new Date(contest.getStartAt());
      const endTime = new Date(contest.getEndAt());
      const now = new Date();
      if (now.getTime() < startTime.getTime()) {
        return "INCOMING";
      } else if (now.getTime() > endTime.getTime()) {
        return "ENDED";
      } else {
        return "RUNNING";
      }
    },

    // get number of participants by get all participants list and return the length of the list
    // need api count number of participants
    async getNumberOfParticipants(contest: Contest) {
      const contestId = contest.getId();
      try {
        const response = await getParticipants(contestId, 0, 100);
        this.numberOfParticipants = response.length;
      } catch (error) {
        errorHandler(error as Error);
      }
    },

    toContest(contest: Contest) {
      localStorage.setItem("contest", JSON.stringify(contest));
      this.$router.push(`contest/${contest.getId()}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: white;
  display: flex;
  width: 95%;
  height: 100vh;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  margin-left: 2.4%;

  .wrapper__title,
  .wrapper__content {
    display: grid;
    grid-template-columns: 20% 18% repeat(2, 20%) 6% 16%;
    justify-items: center;
    align-items: center;
    width: 95%;
    height: 50px;
  }

  .wrapper__title {
    margin-top: 10px;
  }

  .wrapper__content {
    border: 1px solid #c9c2e0;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .wrapper__content:hover {
    background-color: rgb(241, 227, 249);
  }

  .item--title {
    color: #302f4e;
    font-weight: 500;
  }

  .item--content {
    color: #7160bc;
  }
  }
</style>
