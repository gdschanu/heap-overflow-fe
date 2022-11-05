<template>
  <p class="background">
    <div class="header">
      <i
        class="fa-sharp fa-solid fa-arrow-left header--icon"
        @click="backToListContest()"
      ></i>
      <h1 class="header--title">Contest Detail</h1>
    </div>
    <div class="container">
      <div class="container--left">
        <div class="wrapper">
          <div class="left--header"><p>Problems</p></div>
          <div class="wrapper__title">
            <div class="title--no"><p class="item--title">No.</p></div>
            <div class="title--name"><p class="item--title">Name</p></div>
            <div class="title--score"><p class="item--title">Score</p></div>
          </div>
          <div class="wrapper__content" v-for="(problem, index) in listProblem">
            <div class="content--no">
              <p class="item--content">{{ index }}</p>
            </div>
            <div class="content--name">
              <p
                class="item--content"
                style="color: #02a9b5; font-weight: bold"
              >
                {{ problem.name }}
              </p>
            </div>
            <div class="content--score">
              <p class="item--content">{{ problem.score }}</p>
            </div>
          </div>
        </div>
        <ContestDescription :description="getDescription" />
      </div>
      <div class="container--right">
        <div class="join">
          <p v-if="!isJoined" class="description">
            Click the button bellow to join the contest
          </p>
          <p v-else class="description">You've joined this contest</p>
          <button v-if="!isJoined" class="btn" @click="joinContest">
            Join
          </button>
          <button v-else="isJoined" class="btn--disabled">Joined</button>
        </div>
        <!-- rank/list participant -->
        <RankList v-if="isLated" />
        <ParticipantList
          v-else
          v-if="totalPages"
          :participantList="participantList"
          :totalPages="totalPages"
          @pageChanged="getParticipantList"
        />
      </div>
    </div>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Contest } from "../model/contest/contest";
import { Problem } from "../model/contest/problem";
import {
  countParticipants,
  getParticipants,
} from "../model/participant/domainLogic/participant";
import { Participant } from "../model/participant/participant";
import RankList from "./detail/RankList.vue";
import ParticipantList from "./detail/ParticipantList.vue";
import ContestDescription from "./detail/ContestDescription.vue";
import errorHandler from "@/shared/helpers/errorHandler";
import { AxiosError } from "axios";
import { checkJoined, joinContest } from "../model/contest/domainLogic/contest";

export default defineComponent({
  name: "ContestDetail",

  components: {
    RankList,
    ParticipantList,
    ContestDescription,
  },

  data() {
    return {
      // participant: {} as Participant,
      isJoined: false,
      participantList: [] as Participant[],
      perPage: 5,
      totalPages: 0,
    };
  },

  async created() {
    // check Joined or not
    const contestId = this.getContest.getId() as string;
    try {
      const response = (await checkJoined(contestId)) as boolean;
      // console.log(response);
      this.isJoined = response;
    } catch (error) {
      errorHandler(error as AxiosError);
    }

    // count participant
    try {
      const numberOfParticipants = await countParticipants(
        this.getContest.getId()
      );
      console.log(numberOfParticipants);
      this.totalPages = Math.ceil(numberOfParticipants / this.perPage);
      console.log(this.totalPages);
    } catch (error) {
      errorHandler(error as AxiosError);
    }

    // get first participant list
    this.getParticipantList(1);
  },

  computed: {
    getContest() {
      const contest = JSON.parse(localStorage.getItem("contest") as string);
      return new Contest(
        contest._id,
        contest._name,
        contest._description,
        contest._startAt,
        contest._endAt,
        contest._author,
        contest._problems
      ) as Contest;
    },

    async getRankList() {
      return 10;
    },

    listProblem() {
      const problems = this.getContest.getProblems() as Problem[];
      // console.log(problems);
      return problems;
    },

    getDescription(): String {
      const description = this.getContest.getDescription();
      return description;
    },

    isLated() {
      const endAt = new Date(this.getContest.getEndAt());
      const now = new Date();
      if (now.getTime() > endAt.getTime()) {
        return true;
      }
      return false;
    },
  },

  methods: {
    // create participant when click to join button
    // need to remember when the participant joined
    async joinContest() {
      const contestID = this.getContest.getId() as string;
      try {
        const response = await joinContest(contestID);
        alert(response);
        this.isJoined = true;
        location.reload();
      } catch (error) {
        errorHandler(error as AxiosError);
      }
    },

    async getParticipantList(page: number) {
      this.participantList = [];
      const contestId = this.getContest.getId() as string;
      try {
        const response = await getParticipants(
          contestId,
          page - 1,
          this.perPage
        );
        // console.log(response);
        response.forEach((item) => {
          this.participantList.push(item);
        });
      } catch (error) {
        errorHandler(error as Error);
      }
    },

    backToListContest() {
      this.$router.push("/contest");
    },
  },
});
</script>

<style lang="scss" scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.background {
  background-image: linear-gradient(
    25deg,
    white,
    white,
    white,
    white,
    #96e7ff,
    #fcbdf3,
    #ebb0ff,
    white,
    white,
    white,
    white
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
  width: 100%;
}

.header {
  margin-left: 7%;
  padding: 30px 0;
  padding-top: 10&;

  .header--title {
    display: inline;
    margin: 25px;
    font-size: 25px;
  }

  .header--icon {
    font-size: 22px;
    cursor: pointer;
  }
}

.container {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  max-height: 100%;
  margin: auto;

  .container--left {
    width: 60%;
    .wrapper {
      background-color: white;
      display: flex;
      width: 100%;
      border: 2px solid #cbd5e1;
      border-radius: 20px;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;

      .left--header {
        margin-top: 20px;
        color: #302f4e;
        font-weight: 500;
      }

      .wrapper__title,
      .wrapper__content {
        display: grid;
        grid-template-columns: 20% 50% 30%;
        justify-items: center;
        align-items: center;
        width: 90%;
        min-height: 50px;
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
  }

  .container--right {
    width: 20%;

    .join {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      min-height: 50px;
      background-color: white;
      border: 2px solid #cbd5e1;
      border-radius: 20px;
      margin-bottom: 40px;

      .description {
        color: #302f4e;
        font-weight: 500;
        margin-bottom: 1.3rem;
      }

      .btn {
        border: 1px solid #c9c2e0;
        border-radius: 10px;
        background-color: #7160bc;
        font-size: 18px;
        color: white;
        width: 30%;
        height: 2em;
      }

      .btn--disabled {
        border: 1px solid #c9c2e0;
        border-radius: 10px;
        background-color: #ccc;
        font-size: 18px;
        color: white;
        width: 30%;
        height: 2em;
        // something to disabled the button here
      }
    }
  }
}
</style>
