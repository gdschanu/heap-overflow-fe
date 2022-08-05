<template>
  <h1 class="page__title">Contest detail</h1>
  <div class="container">
    <div class="container__left">
      <table class="container__left-problem--table">
        <thead>
          <span class="problem__table--title"><p>Problems</p></span>
          <tr>
            <th>#</th>
            <th>Problem name</th>
            <th>Score</th>
          </tr>
        </thead>
        <!-- v-for problems -->
        <!-- <tbody v-for="problem in listProblem"> -->
        <tbody>
          <tr>
            <td class="prob--order">1</td>
            <td class="prob--name">
              <p>abc</p>
            </td>
            <td class="prob--score">100</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="container__right">
      <div class="container__right-joinContest--table">
        <table>
          <thead>
            <span><p>Join contest</p></span>
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

      <div class="container__right-rank--table">
        <table>
          <thead>
            <span class="rank__problem--title"><p>Rank</p></span>
            <tr>
              <th>#</th>
              <th>Coder Name</th>
            </tr>
          </thead>
          <!-- v-for something ??? -->
          <tbody>
            <tr>
              <td class="rank--order">1</td>
              <td class="rank--name">coderName</td>
            </tr>
          </tbody>
        </table>
      </div>
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

export default defineComponent({
  data() {
    return {
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

    listProblem() {
      const problems = this.getContest.getProblems() as Problem[];
      return problems;
    },

    getRank() {

    },

    getProbScore() {
      
    }
  },

  methods: {
    // create participant when click to join button
    joinContest() {
      const contestID = this.getContest.getId() as string;
      try {
        const participant = createParticipant(contestID) as Participant;
        this.isJoin = true;
        return participant;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
}

.page__title {
  font-size: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
}
.container {
  width: 80%;
  margin: 0 auto;

  .container__left {
    float: left;
    width: 70%;

    .prob--name {
      color: green;
      &:hover {
        color: rgba(0, 128, 0, 0.6);
      }
    }
  }

  span {
    display: block;
    width: 100%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
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

  table,
  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }

  .container__right {
    float: right;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 30%;
    padding-left: 20px;

    .container__right-joinContest--table {
      table {
        border-top: unset;
        border-left: unset;
        border-right: unset;

        td {
          border: 0.5px solid #aaa9a9;
        }

        span {
          p {
            font-weight: 600;
            font-size: 20px;
          }
        }
      }

      p {
        text-align: left;
        padding: 6px;
        font-size: 14px;
      }

      .join--btn {
        padding: 4px 14px;
        margin: 0 auto;
        color: whitesmoke;
        background-color: green;
        border-radius: 4px;
        margin: 6px;
        &:hover {
          background-color: rgba(0, 128, 0, 0.6);
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

    .rank__problem--title {
      margin-top: 20px;
    }
  }
}
</style>
