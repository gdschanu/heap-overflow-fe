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
    <div class="wrapper__content" v-for="(contest, index) in contests">
      <div class="content--name" @click="toContest(contest)">
        <p class="item--content" style="color:#17b2bd;font-weight:bold;">{{ contest.getName() }}</p>
      </div>
      <!-- Author here -->
      <div class="content--author">
        <p class="item--content">{{Math.floor(Math.random() * 999)}}</p>
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
        <p class="item--content" 
        style="color:#90d490;font-weight: bold;"
        v-if="contestStatus(contest) === 'RUNNING'">
          {{ contestStatus(contest) }}
        </p>
        <p class="item--content" 
        style="color:#cf7e8b;font-weight: bold;"
        v-if="contestStatus(contest) === 'ENDED'">
          {{ contestStatus(contest) }}
        </p>
        <p class="item--content" 
        style="color:#e3c05f;font-weight: bold;"
        v-if="contestStatus(contest) === 'INCOMING'">
          {{ contestStatus(contest) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Contest } from "@/contest/model/contest/contest";

export default defineComponent({
  name: "TableContest",

  props: {
    contests: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {};
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
  display: grid;
  width: 85%;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  padding-bottom: 10px;
  justify-items: center;

  .wrapper__title,
  .wrapper__content {
    display: grid;
    grid-template-columns: 25% 15% repeat(2, 20%) 5% 15%;
    justify-items: center;
    align-items: center;
    width: 95%;
    min-height: 50px;
  }

  .wrapper__content {
    border: 1px solid #c9c2e0;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .item--title {
    color: #302f4e;
    font-weight: 500;
  }

  .item--content {
    color: #7160bc;
  }

  .content--name {
    p {
      :hover {
        cursor: pointer;
      }
    }
  }
}
</style>
