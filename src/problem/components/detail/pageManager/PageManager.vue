<script>
import PageManager from './PageManager'
export default {
  data() {
    return {
      pageManager: null
    }
  },
  created() {
    console.log('???? ' + this.perPage + ' ' + this.total)
    this.pageManager = new PageManager(this.perPage, this.total, this.moveToPageHandler)
  },
  props: ['perPage', 'total', 'moveToPageHandler'],
}
</script>

<template>
  <div class="pagination-container">
      <div class="pagination">
          <!-- Left arrow  -->
          <a @click="pageManager.moveToPreviousPage()" >&laquo;</a>

          <!-- Left page -->
          <a 
            v-if="pageManager.getCurrentPage() == 1" 
            class="active" 
            @click="pageManager.moveToPage(1)"
          >1</a>
          <a 
            v-if="pageManager.getCurrentPage() != 1"
            @click="pageManager.moveToPage(1)"
          >1</a>

          <!--Left ellipsis  -->
          <a v-if="pageManager.canRenderLeftEllipsis()">...</a>

          <!-- Middle pages -->
          <span v-if="pageManager.canRenderMiddlePages()">
            <span v-for="page of pageManager.getMiddlePages()" :key="page">
              <a 
                v-if="page === pageManager.getCurrentPage()"
                class="active"
                @click="pageManager.moveToPage(page)"
              >{{page}}</a>
              <a 
                v-if="page !== pageManager.getCurrentPage()"
                @click="pageManager.moveToPage(page)"
              >{{page}}</a>
            </span>
          </span>

          <!-- Right ellipsis  -->
          <a v-if="pageManager.canRenderRightEllipsis()">...</a>

          <!-- Right page -->
          <a 
            v-if="pageManager.canRenderRightPage() && pageManager.getCurrentPage() === pageManager.getRightPage()"
            class="active"
            @click="pageManager.moveToPage(pageManager.getRightPage())"
          >
            {{pageManager.getRightPage()}}
          </a>
          <a 
            v-if="pageManager.canRenderRightPage() && pageManager.getCurrentPage() !== pageManager.getRightPage()"
            @click="pageManager.moveToPage(pageManager.getRightPage())"
          >
            {{pageManager.getRightPage()}}
          </a>

          <!-- Right arrow -->
          <a @click="pageManager.moveToNextPage()">&raquo;</a>
      </div>
  </div>
</template>

<style scoped>
.pagination-container {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #535653;
  color: white;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
</style>
