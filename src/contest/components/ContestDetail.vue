<template>
  <h1 class="page__title">Contest detail</h1>
  <div class="backBtn">
    <i class="fa-solid fa-circle-arrow-left" @click="backToListContest"></i>
  </div>
  <div class="container">
    <div class="container__left">
      <div class="container__left--problems">
        <table>
          <thead>
            <span><p>Problem</p></span>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(problem, index) in listProblem" :key="index">
              <td>{{ problem.ordinal }}</td>
              <td class="problem--name">
                <p>{{ problem.name }}</p>
              </td>
              <td>{{ problem.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ContestDescription :description="getDescription" />
    </div>

    <div class="container__right">
      <div class="container__right-joinContest--table">
        <table>
          <thead>
            <span><p>Join</p></span>
          </thead>
          <tbody>
            <tr>
              <td>
                <p class="">Click join button to join the contest</p>
                <button v-if="!isJoin" class="join--btn" @click="joinContest">
                  Join
                </button>
                <button v-else class="join--btn joined" disabled>Joined</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- rank/list participant -->
      <RankList v-if="isLated"/>
      <ParticipantList v-else/>,
      <div class="clear"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Contest } from "../model/contest/contest";
import { Problem } from "../model/contest/problem";
import { createParticipant } from "../model/participant/domainLogic/participant";
import { Participant } from "../model/participant/participant";
import RankList from "./detail/RankList.vue";
import ParticipantList from "./detail/ParticipantList.vue";
import ContestDescription from "./detail/ContestDescription.vue";
import errorHandler from "@/shared/helpers/errorHandler";

export default defineComponent({
  name: "ContestDetail",

  components: {
    RankList,
    ParticipantList,
    ContestDescription,
  },

  data() {
    return {
      participant: {} as Participant,
      isJoin: false,
    };
  },

  created() {},

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

    async getParticipantList() {
      const startTime = new Date(this.getContest.getStartAt())
      const endTime = new Date(this.getContest.getEndAt())
      const now = new Date();
      if (now >= startTime && now < endTime) {
        try {

        } catch (error) {
          errorHandler(error as Error)
        }
      }
    },

    async getRankList() {},
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
    joinContest() {
      const contestID = this.getContest.getId() as string;
      const participant = createParticipant(contestID);
      this.participant = participant;
      // console.log(this.participant._contestId);
      this.isJoin = true;
    },

    backToListContest() {
      this.$router.push("/contest");
    },
  },
});
</script>

<style lang="scss" scoped>
.backBtn {
  top: -60px;
  left: 10%;
  position: relative;
  font-size: 28px;
  i {
    &:hover {
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }
}
@mixin text-center {
  text-align: center;
}

@mixin none-TopLeftRight-border {
  border-top: unset;
  border-right: unset;
  border-left: unset;
}

.page__title {
  @include text-center;
  font-size: 30px;
  padding-bottom: 30px;
  padding-top: 50px;
}
.container {
  @include text-center;
  display: flex;
  align-items: flex-start;
  width: 80%;
  margin: 10px auto;

  .container__left {
    width: 70%;

    .problem--name {
      color: #7b61ff;
      &:hover {
        color: #7b61ff77;
      }

      p:hover {
        cursor: pointer;
      }
    }

    span {
      margin-left: -0.5px;
    }

    tr,
    td {
      padding: 10px 30px;
    }

    .prob--name {
      color: #7b61ff;
      &:hover {
        color: #7b61ff77;
      }
    }
  }

  span {
    display: block;
    width: 100.2%;
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
    width: 100%;
    border-bottom: none;
  }

  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }

  .container__right {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 30%;
    padding-left: 20px;

    .container__right-joinContest--table {
      table {
        @include none-TopLeftRight-border;

        span {
          width: 30%;
          p {
            font-weight: 600;
            font-size: 20px;
          }
        }
      }

      tbody {
        p {
          text-align: left;
          font-size: 14px;
          padding: 10px;
        }
      }

      .join--btn {
        padding: 4px 14px;
        margin: 0 auto;
        color: whitesmoke;
        background-color: #7b61ff;
        border-radius: 4px;
        margin: 6px;
        &:hover {
          background-color: #7b61ff77;
          color: unset;
          cursor: pointer;
        }
      }

      .joined {
        background-color: #ccc;
        color: unset;
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
}

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               RUN FLUENTLY         NO BUG
//
</style>
