<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <div class="title"><p>Your Process</p></div>
      <!-- <div class="dots">
        <i class="fa-solid fa-ellipsis"></i>
      </div> -->
    </div>
    <div class="wrapper__content">
      <div class="content--level">
        <div
          v-if="progressList"
          class="level--level"
          v-for="progress in progressList"
          @click="setProgress(progress)"
        >
          <i
            class="fa-sharp fa-solid fa-circle"
            :class="{ activatedLevel: isActivatedDifficulty(progress) }"
          ></i>
          <p
            class="level--content"
            :class="{ activatedLevel: isActivatedDifficulty(progress) }"
          >
            {{ progress.getDifficulty() }}
          </p>
        </div>
      </div>
      <div class="progressCircle" v-if="progressList.length > 0">
        <el-progress 
        type="circle" 
        :width="135" 
        :percentage="this.getProgress.getPercentage()" 
        :status="getStatus" 
        :color="getColor" 
        :stroke-width="12"
        > 
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span><br>
            <span span class="percentage-label" v-if="percentage < 100">Progressing</span>
            <span span class="percentage-label" v-else>Completed</span>
          </template>
        </el-progress>
      </div>
    </div>
    <div class="wrapper__text">
      <p v-if="progressList.length > 0">
        You've solved <h3>{{ getProgress.getDone() }}/{{ getProgress.getProblems() }}</h3>
        {{ getDifficulty }} problems
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Progress } from "@/shared/models/progress/progress";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProgressTable",

  props: {
    progressList: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      progress: {} as Progress,
    };
  },

  async created() {},

  computed: {
    getProgress() {
      if (this.progress._difficulty === undefined) {
        this.setProgress(this.progressList[0] as Progress);
        return this.progress;
      } else {
        return this.progress;
      }
    },

    getDifficulty() {
      if (this.progress.getDifficulty() === "EASY") {
        return "easy";
      }
      if (this.progress.getDifficulty() === "MEDIUM") {
        return "medium";
      } else {
        return "hard";
      }
    },

    getStatus() {
      if (this.progress.getPercentage() === 100) {
        return "success";
      } else {
        return "";
      }
    },

    getColor() {
      if (this.progress.getPercentage() === 100) {
        return "#13CE66";
      } else {
        return "#302F4E";
      }
    },
  },

  methods: {
    setProgress(progress: Progress) {
      this.progress = progress as Progress;
      console.log(progress);
    },

    isActivatedDifficulty(progress: Progress) {
      return this.progress._difficulty === progress.getDifficulty();
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  height: 100%;
  // margin: 0 auto;
  justify-items: center;
  align-content: space-around;
  font-size: 12px;

  .wrapper__title,
  .wrapper__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // min-height: 50px;
  }
  .wrapper__title {
    padding-bottom: 14px;

    .title {
      color: #302f4e;
      font-weight: 500;
      font-size: 20px;
    }

    i {
      color: #9288c1;
      font-size: 24px;
    }
  }

  .wrapper__content {
    .content--level {
      .level--level {
        display: flex;
        align-content: center;
        align-items: center;
        color: #c9c2e0;
        cursor: pointer;

        p {
          margin-left: 12px;
          font-weight: 500;
          line-height: 21px;
          padding: 10px 0;
        }

        .activatedLevel {
          color: #302f4e;
        }
      }
    }
    .progressCircle {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100px;

      .el-progress--circle {
        margin-right: 3.5em;
        margin-bottom: 1em;
      }

      .percentage-value {
        color: #302f4e;
        font-size: 30px;
        font-weight: 500;
      }

      .percentage-label {
        color: #302f4e;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }

  .wrapper__text {
    line-height: 21px;
    font-weight: 400;
    color: #302f4e;
    font-size: 12px;
    margin-top: 10px;
    // padding-top: 20px;

    h3 {
      display: inline;
      font-weight: 700;
      font-size: 12px;
    }
  }
}
</style>
