<template>
  <Nav>
    <Loading v-show="isLoading" />
    <h1 class="contest__title">Contests</h1>
    <div class="contest__container">
      <table class="contest__container--table">
        <thead>
          <span><p>Contest</p></span>
          <tr>
            <th class="title--name">Name</th>
            <th>Author</th>
            <th>Start</th>
            <th>End</th>
            <th>Problems</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contest, index) in contestData" :key="index">
            <td @click="toContest(contest)" class="detail--name">
              <p href="">{{ contest.getName() }}</p>
            </td>
            <!-- author here -->
            <td class="detail--author">Author</td>
            <td class="detail--startTime">{{ startTime(contest) }}</td>
            <td class="detail--endTime">{{ endTime(contest) }}</td>
            <td class="detail--numProbs">{{ contest._problems.length }}</td>
            <td class="detail--status">
              <p>{{ contestStatus(contest) }}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <h2 @click="previousPage" v-show="canPrev" class="previous">
          ...Previous page
        </h2>
        <div class="space" v-show="canPrev"></div>
        <h2 @click="nextPage" v-show="canNext" class="next">Next page...</h2>
      </div>
    </div>
  </Nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Contest } from "../model/contest/contest";
import { searchContest } from "../model/contest/domainLogic/contest";
import { countContest } from "../model/contest/domainLogic/contest";
import errorHandler from "../../shared/helpers/errorHandler";
import Loading from "./detail/Loading.vue";
import { AxiosError } from "axios";
import Nav from "@/shared/components/general/Nav.vue";

export default defineComponent({
  components: {
    Loading,
    Nav,
  },

  data() {
    return {
      page: 0,
      perPage: 21,
      contestCount: 0,
      contestData: [] as Contest[],
      isLoading: true,
    };
  },

  async created() {
    try {
      const response = await searchContest(0, this.perPage);
      console.log(response);
      response.forEach((item) => {
        this.contestData.push(item);
      });
      setTimeout(() => (this.isLoading = false), 200);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
    // contest count
    try {
      const response = await countContest() as unknown as number;
      this.contestCount = response;
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  },

  computed: {
    canNext() {
      if (this.contestCount - this.page * this.perPage <= this.perPage) {
        return false;
      }
      return true;
    },

    canPrev() {
      if (this.page === 0) {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    async nextPage() {
      this.page++;
      this.contestData = [];
      // const remainContest = this.contestCount - this.page * this.perPage;
      try {
        const response = await searchContest(this.page, this.perPage);
        // console.log(response);
        response.forEach((item) => {
          this.contestData.push(item);
        });
      } catch (error) {
        errorHandler(error as AxiosError);
      }
    },

    async previousPage() {
      this.page--;
      this.contestData = [];
      try {
        const response = await searchContest(this.page, this.perPage);
        response.forEach((item) => {
          this.contestData.push(item);
        });
      } catch (error) {
        errorHandler(error as AxiosError);
      }
    },

    startTime(contest: Contest) {
      const time = new Date(contest.getStartAt());
      const string = `${time.getDate()}-${
        time.getMonth() + 1
      }-${time.getFullYear()} / ${time.getHours()}:${time.getMinutes()}`;
      return string;
    },

    endTime(contest: Contest) {
      const time = new Date(contest.getEndAt());
      const string = `${time.getDate()}-${
        time.getMonth() + 1
      }-${time.getFullYear()} / ${time.getHours()}:${time.getMinutes()}`;
      return string;
    },

    contestStatus(contest: Contest) {
      const startTime = new Date(contest.getStartAt());
      const endTime = new Date(contest.getEndAt());
      const now = new Date();
      if (now.getTime() < startTime.getTime()) {
        return "Incoming";
      } else if (now.getTime() > endTime.getTime()) {
        return "Too late";
      } else {
        return "Happening";
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
.contest__title {
    margin: 2%;
    text-align: center;
}

.pagination {
  display: flex;
  text-align: left;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 50px;
  color: #7b61ff;

  .space {
    margin: 0 20px;
  }

  .next,
  .previous {
    font-size: 18px;
    &:hover {
      color: #7b61ff77;
      cursor: pointer;
    }
  }
}

.contest__container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  span {
    display: block;
    width: 100.1%;
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    margin-left: -0.5px;
    padding: 4px 0;
    background-color: #ccc;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    p {
      margin-left: 5px;
    }
  }

  table {
    width: 100%;
  }

  th,
  td {
    border: 1px solid #aaa9a9;
    border-collapse: collapse;
    font-size: 16px;
  }

  .contest__container--table {
    tr,
    td {
      padding: 10px 30px;
    }

    th {
      padding: 3px;
    }

    .detail--name {
      color: #7b61ff;
      &:hover {
        color: #7b61ff77;
      }

      p:hover {
        cursor: pointer;
      }
    }

    .detail--status {
      p {
        color: #7b61ff;
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
