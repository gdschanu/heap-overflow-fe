<template>
  <h1 class="heading">1. Create problem</h1>
  <div class="container">
    <form class="container__form" action="" @submit.prevent="">
      <!-- Prob name -->
      <label for="pname">Problem name:</label>
      <input @input="setName" type="text" id="pname" class="formInput" />

      <!-- Prob des -->
      <div class="description--input">
        <label for="pdes">Problem description:</label>
        <MarkdownEditor
          class="formInput des"
          id="pdes"
          @dataUpdated="setDescription"
        />
      </div>

      <!-- Prob difficulty -->
      <label for="">Problem difficulty:</label>
      <Select
        class="formSelect"
        @dataUpdated="setDifficulty"
        :list="listDifficulty"
        :selected="`${
          practiceProblem.getDifficulty()
            ? practiceProblem.getDifficulty()
            : 'Choose difficulty'
        }`"
      />

      <!-- Allowed Programming language -->
      <label for="">Allowed Programming languages:</label>
      <div class="formAllowedLanguage">
        <Select
          class="formSelect"
          text="Choose languages"
          @dataUpdated="setAllowedProgrammingLanguages"
          :list="listProgrammingLanguage"
        />
        <span class="formResults"
          >[
          <span v-for="programmingLang in allowedProgrammingLanguages">
            {{ programmingLang + ", " }}
          </span>
          ]</span
        >
      </div>

      <!-- problem limit -->
      <label class="marginT30">Limit form</label>
      <div class="problemLimit formBorder">
        <form action="" @submit.prevent="">
          <div class="formFlexVertical">
            <div class="pLangSelect">
              <label for="">Programming language:</label>
              <!-- If exist programmingLanguage = programmingLanguage else "Choose..." -->
              <Select
                :selected="`${
                  programmingLanguage ? programmingLanguage : 'Choose language'
                }`"
                class="formSelect"
                @dataUpdated="setProgrammingLanguage"
                text="Choose programming language"
                :list="listProgrammingLanguage"
              />
            </div>
            <div class="timeLimit">
              <label for="pmemory">Memory limit:</label>
              <input
                @input="setMemoryLimit"
                type="number"
                :value="memoryLimit"
                class="formInput formNumber"
              />
            </div>
            <div class="memLimit">
              <label for="ptime">Time limit:</label>
              <input
                @input="setTimeLimit"
                type="number"
                :value="timeLimit"
                class="formInput formNumber"
              />
            </div>
          </div>
          <Button
            text="Set"
            @clicked="addLimit"
            :disabled="isDisabled"
            :loading="isLoading"
            des="Click to set new limit"
          />
        </form>
        <div class="limitList marginT30 formFlexVertical">
          <div class="limitList--time formFlexHorizontal">
            <label for="">Memory limits list:</label>
            <span
              v-for="(memoryLimit, index) in practiceProblem.getMemoryLimits()"
            >
              {{ index + 1 }}: {{ memoryLimit.getProgrammingLanguage() }} -
              {{ memoryLimit.getMemoryLimit() }}kb
            </span>
          </div>
          <div class="limitList--memo formFlexHorizontal">
            <label for="">Time limit list</label>
            <span v-for="(timeLimit, index) in practiceProblem.getTimeLimits()">
              {{ index + 1 }}: {{ timeLimit.getProgrammingLanguage() }} -
              {{ timeLimit.getTimeLimit() }}ms
            </span>
          </div>
        </div>
      </div>

      <!-- create problem -->
      <Button
        @clicked="handleCreateProblem"
        class="marginT30"
        text="Next"
        :disabled="isDisabled"
        :loading="isLoading"
        des="Click to create a new problem"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createTestCase } from "../../model/domainLogic/testCase";
import { createProblem } from "../../model/domainLogic/problem";
import Problem from "../../model/problem";
import Difficulty from "@/problem/model/difficulty";
import Select from "../common/Select.vue";
import Button from "../common/Button.vue";
import MarkdownRender from "@/shared/components/general/MarkdownRender.vue";
import MarkdownEditor from "@/shared/components/general/MarkdownEditor.vue";
import { ProblemStatus } from "@/problem/model/problemStatus";
import ProgrammingLanguage from "@/problem/model/programmingLanguage";
import MemoryLimit from "@/problem/model/memoryLimit";
import TimeLimit from "@/problem/model/timeLimit";
import Millisecond from "@/problem/model/millisecond";
import Kilobyte from "@/problem/model/kilobyte";
import programmingLanguage from "@/problem/model/programmingLanguage";
import errorHandler from "@/shared/helpers/errorHandler";
import { AxiosError } from "axios";

export default defineComponent({
  components: {
    Select,
    Button,
    MarkdownRender,
    MarkdownEditor,
  },

  data() {
    return {
      practiceProblem: new Problem(
        "",
        "",
        "",
        "",
        "" as Difficulty,
        0,
        [],
        ProblemStatus.UNDONE
      ),
      allowedProgrammingLanguages: new Set<ProgrammingLanguage>(),
      memoryLimit: 1000 as unknown as Kilobyte,
      timeLimit: 1000 as unknown as Millisecond,
      programmingLanguage: "" as ProgrammingLanguage,
      isLoading: false,
      isDisabled: false,
    };
  },

  computed: {
    listDifficulty(): Array<{
      name: string;
      value: string;
    }> {
      return [
        {
          name: "Easy",
          value: Difficulty.EASY,
        },
        {
          name: "Normal",
          value: Difficulty.MEDIUM,
        },
        {
          name: "Hard",
          value: Difficulty.HARD,
        },
      ];
    },

    listProgrammingLanguage(): Array<{
      name: string;
      value: string;
    }> {
      return [
        {
          name: "Java",
          value: ProgrammingLanguage.JAVA,
        },
        {
          name: "Python",
          value: ProgrammingLanguage.PYTHON,
        },
        {
          name: "Javascript",
          value: ProgrammingLanguage.JAVASCRIPT,
        },
        {
          name: "C++",
          value: ProgrammingLanguage.CPLUSPLUS,
        },
      ];
    },

    getDifficulty(): String {
      return this.practiceProblem.getDifficulty();
    },
  },

  methods: {
    setName(event) {
      this.practiceProblem.setName(event.target.value);
      // console.log(this.practiceProblem.getName());
    },

    setDescription(value) {
      this.practiceProblem.setDescription(value);
      // console.log(this.practiceProblem.getDescription());
    },

    setDifficulty(item: { name: string; value: Difficulty }) {
      this.practiceProblem.setDifficulty(item.value);
      // console.log(this.practiceProblem.getDifficulty());
    },

    setMemoryLimit(event) {
      this.memoryLimit = event.target.value as Kilobyte;
      // console.log(this.memoryLimit);
    },

    setTimeLimit(event) {
      this.timeLimit = event.target.value as Millisecond;
      // console.log(this.timeLimit + " " + this.memoryLimit);
    },

    setProgrammingLanguage(item) {
      this.programmingLanguage = item.value;
      // console.log(this.programmingLanguage);
    },

    setAllowedProgrammingLanguages(item) {
      this.allowedProgrammingLanguages.add(item.value);
      // console.log(this.allowedProgrammingLanguages);
    },

    addLimit() {
      if (this.programmingLanguage) {
        try {
          const newMemoryLimit = new MemoryLimit(
            this.programmingLanguage,
            this.memoryLimit as unknown as Kilobyte
          );
          const newTimeLimit = new TimeLimit(
            this.programmingLanguage,
            this.timeLimit as unknown as Millisecond
          );
          this.practiceProblem.addMemoryLimit(newMemoryLimit);
          this.practiceProblem.addTimeLimit(newTimeLimit);
          // console.log(this.practiceProblem.getMemoryLimits());
          // console.log(this.practiceProblem.getTimeLimits());
        } catch (error) {
          errorHandler(error as AxiosError);
        }
      } else {
        alert("Please choose programing language");
      }
    },

    async handleCreateProblem() {
      this.allowedProgrammingLanguages.forEach(
        (programmingLanguage: ProgrammingLanguage) => {
          this.practiceProblem.addAllowedProgrammingLanguage(
            programmingLanguage
          );
        }
      );
      try {
        this.isLoading = true;
        this.isDisabled = true;
        const problemId = await createProblem(this.practiceProblem as Problem);
        this.isLoading = false;
        this.isDisabled = false;
        console.log(problemId);
        localStorage.setItem("newProblemId", problemId);
        alert("You have successfully created a new problem");
        this.$router.push(`${problemId}/testCase`);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.formSelect {
  width: 14rem;
  height: 3rem;
}

.marginT30 {
  margin-top: 30px !important;
}

.heading {
  text-align: center;
  margin: 20px 0;
}

Button {
  margin: 20px 0;
  width: 8rem;
}

.container {
  margin-left: 2rem;
  margin-top: 3rem;

  h2 {
    color: #9288c1;
    font-weight: 500;
    margin-top: 22px;
    font-size: 26px;
  }

  form label {
    color: #9288c1;
    font-size: 18px;
    font-weight: 500;
    display: block;
    margin-top: 20px;
    margin-bottom: 6px;
  }

  .formInput {
    width: 20rem;
    height: 2rem;
    padding: 10px;
    border: 1px solid #302f4e;
    border-radius: 10px;
  }

  .description__container {
    display: flex;
  }

  .formNumber {
    width: 8rem;
  }

  .des {
    width: 45rem;
    height: 30rem;
    margin-right: 3rem;
  }

  .formBorder {
    max-width: 35rem;
    border: 2px solid #302f4e;
    border-radius: 10px;
    padding: 1rem 0;
    padding-bottom: 2rem;

    Button {
      width: 5rem;
      margin-left: 0.75rem;
      margin-bottom: -1rem;
    }
  }

  .formAllowedLanguage {
    display: flex;
    align-items: center;

    .select {
      margin-right: 2px;
    }

    span {
      font-size: 20px;
    }
  }

  .formFlexVertical {
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
  }

  .formFlexHorizontal {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
  }
}
</style>
