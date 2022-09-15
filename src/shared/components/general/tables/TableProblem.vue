<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <div class="item item--1"><p class="item--title">ID</p></div>
      <div class="item item--2"><p class="item--title">Name</p></div>
      <div class="item item--3"><p class="item--title">Acceptance</p></div>
      <div class="item item--4"><p class="item--title">Difficulty</p></div>
      <div class="item item--5"><p class="item--title">Tags</p></div>
      <div class="item item--6"><p class="item--title">Status</p></div>
    </div>
    <div class="wrapper__content" v-for="(problem, index) in problems">
      <div class="item item--1">
        <p class="item--content">{{ index }}</p>
      </div>
      <div class="item item--2" @click="probClick(problem)">
        <p class="item--content">{{ probName(problem) }}</p>
      </div>
      <div class="item item--3">
        <p class="item--content">{{ probAcceptance(problem) }}</p>
      </div>
      <div class="item item--4">
        <p class="item--content">{{ probDifficulty(problem) }}</p>
      </div>
      <div class="item item--5">
        <p class="item--content">{{ probTags(problem) }}</p>
      </div>
      <div class="item item--6">
        <p class="item--content">{{ probStatus(problem) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableProblem",

  props: {
    problems: {
      type: Array,
      required: true,
      default: () => [
        {
          id: 0,
          name: null,
          acceptance: null,
          difficulty: null,
          tags: null,
          status: null,
        },
      ],
    },
  },

  data() {
    return {};
  },

  methods: {
    probName(problem) {
      return problem.name;
    },

    probAcceptance(problem) {
      return problem.acceptance;
    },

    probDifficulty(problem) {
      return problem.difficulty;
    },

    probStatus(problem) {
      return problem.status;
    },

    probTags(problem) {
      return problem.tags;
    },

    probClick(problem) {
      this.$emit("probClicked", problem);
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  border: 2px solid #cbd5e1;
  border-radius: 20px;
  padding-bottom: 20px;
  justify-items: center;

  .wrapper__title,
  .wrapper__content {
    display: grid;
    grid-template-columns: 5% 25% repeat(3, 20%) 10%;
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
    color: #9288c1;
  }

  .content--name {
    :hover {
      cursor: pointer;
    }
  }
}
</style>
