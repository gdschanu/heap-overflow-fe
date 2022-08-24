<template>
  <div class="container">
    <button class="previous" @click="previousPage()" :disabled="isFirstPage">
      &lt;
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
    <button class="next" @click="nextPage()" :disabled="isLastPage">
      &gt;
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pagination",

  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentPage: 1,
    };
  },

  computed: {
    startPage(): number {
      // on first page
      if (this.currentPage === 1) {
        return 1;
      }
      // on last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      // on between
      return this.currentPage - 1;
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

  button {
    padding: 2px 10px;
    background-color: #ccc;
    color: #7b61ff;
    font-size: 16px;
    margin: 0 4px;
    border-radius: 4px;
  }

  .previous,
  .next {
    color: black;
    font-size: 22px;
  }

  button[disabled] {
    color: rgba(204, 204, 204, 0.5);
    background-color: rgba(204, 204, 204, 0.5);
  }

  .activeBtn {
    background-color: #7b61ff;
    color: #fff;
  }
}
</style>
