<template>
  <h1 class="heading">2. Create test case</h1>
  <div class="container">
    <form action="" @submit.prevent="">
      <!-- input -->
      <span class="input">
        <label for="in">Input</label>
        <input @input="setInput" type="text" id="in" class="formInput" />
      </span>

      <!-- output -->
      <span class="output">
        <label for="out">Expected output</label>
        <input @input="setOutput" type="text" id="out" class="formInput" />
      </span>

      <!-- ordinal -->
      <span class="ordinal">
        <label for="ordinal">Ordinal</label>
        <input
          @input="setOrdinal"
          type="number"
          id="ordinal"
          class="formInput formNumber"
        />
      </span>

      <!-- sample -->
      <span class="sample">
        <label for="sampleSelect">Is this a sample:</label>
        <Select
          :selected="`${newTestCase.getSample() ? 'TRUE' : 'FALSE'}`"
          class="formSelect"
          @dataUpdated="setSample"
          :list="isSampleList"
          id="sampleSelect"
        />
      </span>

      <!-- description -->
      <span class="description">
        <label for="description">Description:</label>
        <textarea
          @input="setDescription"
          class="formInput des"
          name="description"
          id="description"
        ></textarea>
      </span>

      <!-- create problem -->
      <Button
        @clicked="handleCreateTestCase"
        class="marginT30"
        text="Create"
        :disabled="isDisabled"
        :loading="isLoading"
        des="Click to create a new problem"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Select from "../common/Select.vue";
import Button from "../common/Button.vue";
import TestCase from "@/problem/model/testCase";
import { createTestCase } from "@/problem/model/domainLogic/testCase";
import errorHandler from "@/shared/helpers/errorHandler";
import { AxiosError } from "axios";

export default defineComponent({
  components: {
    Select,
    Button,
  },

  data() {
    return {
      newTestCase: new TestCase(
        localStorage.getItem("newProblemId") as string,
        "",
        "",
        0,
        true,
        ""
      ),
      isLoading: false,
      isDisabled: false,
    };
  },

  created() {
    this.newTestCase;
  },

  computed: {
    isSampleList(): Array<{
      name: string;
      value: boolean;
    }> {
      return [
        { name: "TRUE", value: true },
        { name: "FALSE", value: false },
      ];
    },
  },

  methods: {
    setSample(item) {
      this.newTestCase.setSample(item.value);
      // console.log(this.newTestCase.getSample());
    },

    setInput(event) {
      this.newTestCase.setInput(event.target.value);
      // console.log(this.newTestCase.getInput());
    },

    setOutput(event) {
      this.newTestCase.setExpectedOutput(event.target.value);
      // console.log(this.newTestCase.getExpectedOutput());
    },

    setOrdinal(event) {
      this.newTestCase.setOrdinal(event.target.value);
      // console.log(this.newTestCase.getOrdinal());
    },

    setDescription(event) {
      this.newTestCase.setDescription(event.target.value);
      // console.log(this.newTestCase.getDescription());
    },

    async handleCreateTestCase() {
      try {
        this.isLoading = true;
        this.isDisabled = true;
        const response = await createTestCase(this.newTestCase as TestCase);
        this.isLoading = false;
        this.isDisabled = false;
        alert(response);
      } catch (error) {
        errorHandler(error as AxiosError);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.formSelect {
  width: 5rem;
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

.formInput {
  display: block;
  width: 20rem;
  height: 2rem;
  padding: 10px;
  border: 1px solid #302f4e;
  border-radius: 10px;
}

.formNumber {
  width: 5rem;
}

.des {
  width: 40rem;
  height: 20rem;
}

.container {
  margin-left: 1rem;

  form label {
    color: #9288c1;
    font-size: 18px;
    font-weight: 500;
    display: block;
    margin-top: 20px;
    margin-bottom: 6px;
  }
}
</style>
