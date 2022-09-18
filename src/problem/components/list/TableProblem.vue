<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <div class="title--name"><p class="item--title">Name</p></div>
      <div class="title--difficulty"><p class="item--title">Difficulty</p></div>
      <div class="title--acceptance"><p class="item--title">Acceptance</p></div>
      <div class="title--status"><p class="item--title">Tag</p></div>
      <div class="title--tag"><p class="item--title">Status</p></div>
    </div>
    <div class="wrapper__content" v-for="(problem, index) in problems" @click="toProblem(problem)">
      <div class="content--name">
        <p class="item--content" style="color:#02a9b5;font-weight:bold;">{{ problem.getName() }}</p>
      </div>
      <div class="content--difficulty">
        <p class="item--content" 
        style="color:#62d162;font-weight: bold;"
        v-if="problem.getDifficulty() === 'EASY'">
          {{ problem.getDifficulty() }}
        </p>
        <p class="item--content" 
        style="color:#d66779;font-weight: bold;"
        v-if="problem.getDifficulty() === 'HARD'">
          {{ problem.getDifficulty() }}
        </p>
        <p class="item--content" 
        style="color:#e6b93e;font-weight: bold;"
        v-if="problem.getDifficulty() === 'MEDIUM'">
          {{ problem.getDifficulty() }}
        </p>
      </div>
      <div class="content--acceptance">
        <p class="item--content">{{Math.floor(Math.random() * 100)}}%</p>
      </div>
      <div class="content--tag">
        <p class="item--content">Greedy,Graph</p>
      </div>
      <div class="content--status">
        <p class="item--content" 
        style="color:#5fb2f5;font-weight: bold;"
        v-if="Math.floor(Math.random() * 100) % 2 == 0">
          UNDONE
        </p>
        <p class="item--content" 
        style="color:#62d162;font-weight: bold;"
        v-else>
          DONE
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Problem from '@/problem/model/problem';


export default defineComponent({
  name: "TableProblem",

  props: {
    problems: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {
    toProblem(problem : Problem) {
      this.$router.push(`problem/${problem.getId()}`);
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

  .wrapper__content:hover {
    background-color: rgb(242, 219, 255);
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
