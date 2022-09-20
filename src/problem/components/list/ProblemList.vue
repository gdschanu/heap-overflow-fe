<template>
  <Nav>
    <p style="height: 100vh;background-image: linear-gradient(25deg, white, white, white, white, #96e7ff, #fcbdf3, #ebb0ff, white, white, white, white);">
      <Loading v-show="isLoading" />
      <h1 class="contest__title">Problems</h1>
      <div class="contest__container">
        <TableProblem v-if="problemData" :problems="problemData" />
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
import errorHandler from "../../../shared/helpers/errorHandler";
import { AxiosError } from "axios";
import Nav from "@/shared/components/general/Nav.vue";
import Pagination from "@/shared/components/general/Pagination.vue";
import TableProblem from "./TableProblem.vue";
import { countProblems, listProblem } from '@/problem/model/domainLogic/problem';
import { onMounted, Ref, ref, watch } from 'vue';
import Problem from '@/problem/model/problem';


export default defineComponent({
  name: "ListProblem",

  components: {
    Pagination,
    TableProblem,
    Nav,
  },

  data() {
    return {
      page: 0,
      perPage: 16,
      problemData: [] as Problem[],
      isLoading: false, // true
      numberOfProblems: new Number() as number,
    };
  },

  async created() {
    try {
      const response = await listProblem(0, this.perPage);
      // console.log(response);
      response.forEach((item) => {
        this.problemData.push(item);
      });
      this.isLoading = false;
    } catch (error) {
      errorHandler(error as AxiosError);
    }
    // contestCount
    try {
      const numberOfProblems = (await countProblems()) as unknown as number;
      this.numberOfProblems = numberOfProblems;
      // console.log(numberOfProblems);
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  },

  computed: {
    totalPages(): number {
      const pages = Math.ceil(this.numberOfProblems / this.perPage);
      // console.log(pages);
      return pages;
    },
  },

  methods: {
    async toPage(page: number) {
      this.isLoading = true;
      this.problemData = [];
      // console.log(page)
      try {
        const response = await listProblem(page - 1, this.perPage);
        response.forEach((item) => {
          this.problemData.push(item);
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
