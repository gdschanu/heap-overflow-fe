<template>
  <div class="container">
    <button
      class="previousRange navigateButton"
      @click="toPreviousPageRange()"
      :disabled="isFirstPage"
    >
      <i class="fa-solid fa-angles-left"></i>
    </button>
    <button
      class="previous navigateButton"
      @click="previousPage()"
      :disabled="isFirstPage"
    >
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <div class="listPageNumber">
      <button
        v-for="page in pages"
        :key="page"
        @click="clickPage(page)"
        :class="{ activeBtn: isActivePage(page) }"
      >
        {{ page }}
      </button>
    </div>
    <button
      class="next navigateButton"
      @click="nextPage()"
      :disabled="isLastPage"
    >
      <i class="fa-solid fa-angle-right"></i>
    </button>
    <button
      class="nextRange navigateButton"
      @click="toNextPageRange()"
      :disabled="isLastPage"
    >
      <i class="fa-solid fa-angles-right"></i>
    </button>
    <span class="container__toPage">
      <input
        class="container__toPage--toPageNumber"
        type="text"
        v-model="toPageNumValue"
      />
      <button class="container__toPage--go" @click="toPageNumber()">Go</button>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",

  props: {
    totalPages: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      maxVisibleButtons: 5,
      currentPage: 1,
      toPageNumValue: "",
    };
  },

  computed: {
    startPage(): number {
      if (this.totalPages < this.maxVisibleButtons) {
        this.maxVisibleButtons = this.totalPages;
      }

      // on first page
      if (this.currentPage === 1) {
        return 1;
      }
      // on last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      // on pre-last page
      if (this.currentPage === this.totalPages - 1) {
        if (this.currentPage - 3 <= 0) {
          return 1;
        }
        return this.currentPage - 3;
      }
      // on between
      if (this.currentPage == 2) {
        return 1;
      }
      return this.currentPage - 2;
    },

    endPage(): number {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },

    pages() {
      const range = [] as number[];

      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push(i);
      }
      return range;
    },

    isFirstPage() {
      return this.startPage === this.currentPage;
    },

    isLastPage() {
      return this.endPage === this.currentPage;
    },
  },

  methods: {
    clickPage(page: number) {
      this.currentPage = page;
      this.$emit("pageClicked", page);
    },

    nextPage() {
      if (this.currentPage < this.endPage) {
        this.currentPage++;
        this.$emit("pageClicked", this.currentPage);
      }
    },

    previousPage() {
      if (this.currentPage > this.startPage) {
        this.currentPage--;
        this.$emit("pageClicked", this.currentPage);
      }
    },

    toNextPageRange() {
      if (this.currentPage >= this.startPage) {
        if (this.endPage == this.totalPages) {
          this.currentPage = this.endPage;
          this.$emit("pageClicked", this.currentPage);
        } else {
          this.currentPage = this.endPage + 1;
          this.$emit("pageClicked", this.currentPage);
        }
      }
    },

    toPreviousPageRange() {
      if (this.currentPage <= this.endPage) {
        if (this.startPage == 1) {
          this.currentPage = this.startPage;
          this.$emit("pageClicked", this.currentPage);
        } else {
          this.currentPage = this.startPage - 1;
          this.$emit("pageClicked", this.currentPage);
        }
      }
    },

    toPageNumber() {
      let pageNumber = parseInt(this.toPageNumValue) as number;

      if (pageNumber < 1) {
        this.currentPage = 1;
        pageNumber = 1;
      }
      if (pageNumber > this.totalPages) {
        this.currentPage = this.totalPages;
        pageNumber = this.totalPages;
      }

      this.currentPage = pageNumber;
      this.$emit("pageClicked", this.currentPage);
    },

    isActivePage(page: number) {
      return this.currentPage === page;
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  color: #7b61ff;

  .navigateButton {
    font-size: 14px;
    font-weight: 500;
    background-color: #f1f5f9;
    color: #302f4e;
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f4f4f5;
    color: #27272a;
    font-size: 14px;
    font-weight: 500;
    margin: 0 0.175rem;
    border-radius: 5px;
  }

  button[disabled] {
    color: #c9c2e0;
    background-color: #f1f5f9;
  }

  .activeBtn {
    background-color: #302f4e;
    color: #fff;
  }

  .container__toPage {
    .container__toPage--toPageNumber {
      text-align: center;
      color: #27272a;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      background-color: #f4f4f5;
    }
    .container__toPage--go {
      color: #302f4e;
      font-weight: 500;
      font-size: 14px;
      background-color: unset;
    }
  }
}
</style>
