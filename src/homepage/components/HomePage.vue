<template>
  <Nav>
     <p style="background-image: linear-gradient(25deg, white, white, white, white, #96e7ff, #fcbdf3, #ebb0ff, white, white, white, white);">
    <div class="container">
      <div class="main-content" data-v-3a2ef76c>
        <div class="header">
          <h3 v-if="user">Hi, {{ user }}</h3>
          <p>Welcome back!</p>
        </div>
        <div class="swiper">
          <div class="swiper__left-content">
            <p>Take our most Exciting Problem</p>
            <button>
              <span id="btn">Solve now</span>
              <span><img src="@/coder/assets/img/Vector.png" alt="" /> </span>
            </button>
          </div>
          <img src="@/coder/assets/img/vuejs1.png" alt="" />
        </div>
        <ProblemSolving
          v-if="problemData"
          :problems="problemData"
        ></ProblemSolving>
      </div>
      <RightBar />
    </div>
    </p>
  </Nav>
</template>

<script lang="ts">
import Problem from "@/problem/model/problem";
import Nav from "@/shared/components/general/Nav.vue";
import errorHandler from "@/shared/helpers/errorHandler";
import { defineComponent } from "@vue/runtime-core";
import { AxiosError } from "axios";
import { listRecProblem } from "../recommendProblem";
import ProblemSolving from "./ProblemSolving.vue";
import RightBar from "@/shared/components/general/RightBar.vue";

export default defineComponent({
  components: {
    ProblemSolving,
    RightBar,
    Nav,
  },
  data() {
    return {
      problemData: [] as Problem[],
      user: "",
    };
  },
  async created() {
    try {
      const response = await listRecProblem(12);
      console.log(response);
      response.forEach((item) => {
        this.problemData.push(item);
      });
      const username = localStorage.getItem("username");
      if (username) {
        const a = username;
        this.user = a;
      }
    } catch (error) {
      errorHandler(error as AxiosError);
    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  margin: auto;
}

.main-content {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 500;
  height: 100vh;
  width: 100%;
}
.header {
  margin-left: 58px;
  padding-top: 20px;
}

.header p {
  margin-bottom: 20px;
  /* blueGray/800 */
  color: #1e293b;
}
.swiper {
  display: flex;
  margin-left: 53px;
  width: 90%;
  height: 260px;
  left: 280px;
  background: #f8fafc;
  box-shadow: inset 4px 4px 40px rgba(30, 41, 59, 0.1);
  border-radius: 20px;
  justify-content: space-between;
}
.swiper__left-content {
  width: 300px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  /* or 43px */
  /* blueGray/50 */
  color: #1e293b;
}
.swiper__left-content p {
  margin-left: 70px;
  margin-top: 70px;
}
.swiper__left-content button {
  /* blueGray/50 */
  background-color: #1e293b;
  border-radius: 20px;
  display: flex;
  margin-left: 70px;
  margin-top: 20px;
  padding: 10px;
}
.swiper__left-content button img {
  margin-top: 8px;
  margin-left: 8px;
  background: #f8fafc;
  border-radius: 5px;
  padding: 1px;
}
#btn {
  /* blueGray/50 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: flex-end;
  /* blueGray/900 */
  color: #f8fafc;
}
</style>
