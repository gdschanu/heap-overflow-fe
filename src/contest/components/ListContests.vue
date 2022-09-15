<template>
  <Nav>
    <p style="background-image: linear-gradient(30deg, white, white, white, white, #96e7ff, #fcbdf3, #ebb0ff, white, white, white, white);">
      <Loading v-show="isLoading" />
      <h1 class="contest__title">Contests</h1>
      <div class="contest__container">
        <TableContest v-if="contestData" :contests="contestData" />
      </div>
      <div class="pagination">
          <Pagination
            v-if="totalPages"
            :totalPages="totalPages"
            @pageClicked="toPage"
          />
      </div>
    </p>
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
import Pagination from "@/shared/components/general/Pagination.vue";
import TableContest from "@/contest/components/detail/TableContest.vue";

export default defineComponent({
  name: "ListContests",

  components: {
    Loading,
    Pagination,
    TableContest,
    Nav,
  },

  data() {
    return {
      page: 0,
      perPage: 16,
      contestData: [] as Contest[],
      isLoading: false, // true
      numberOfContests: new Number() as number,
    };
  },

  async created() {
    try {
      const response = await searchContest(0, this.perPage);
      // console.log(response);
      response.forEach((item) => {
        this.contestData.push(item);
      });
      this.isLoading = false;
    } catch (error) {
      errorHandler(error as AxiosError);
    }
    // contestCount
    try {
      const numberOfContests = (await countContest()) as unknown as number;
      this.numberOfContests = numberOfContests;
      // console.log(numberOfContests);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  },

  computed: {
    totalPages(): number {
      const pages = Math.ceil(this.numberOfContests / this.perPage);
      // console.log(pages);
      return pages;
    },
  },

  methods: {
    async toPage(page: number) {
      this.isLoading = true;
      this.contestData = [];
      // console.log(page)
      try {
        const response = await searchContest(page - 1, this.perPage);
        response.forEach((item) => {
          this.contestData.push(item);
        });
        this.isLoading = false;
      } catch (error) {
        errorHandler(error as AxiosError);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.contest__title {
  padding: 2%;
  text-align: center;
  font-size: 25px;
}

.pagination {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.contest__container {
  display: flex;
  justify-content: center;
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
