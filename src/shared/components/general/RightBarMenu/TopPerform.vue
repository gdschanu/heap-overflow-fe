<template>
  <div class="wrapper">
    <div class="wrapper__title">
      <div class="title"><p>Coders</p></div>
      <!-- <div class="dots">
        <i class="fa-solid fa-ellipsis"></i>
      </div> -->
    </div>
    <div class="wrapper__header">
      <div class="header--rank"><p class="header">#</p></div>
      <div class="header--user"><p class="header">User</p></div>
      <div class="header--name"><p class="header"></p></div>
      <div class="header--score"><p class="header">Score</p></div>
    </div>
    <div
      class="wrapper__content"
      v-if="topUserList"
      v-for="(user, index) in topUserList"
      :key="index"
    >
      <div class="content--rank">
        <p>{{ user.getRank() }}</p>
      </div>
      <div class="content--userImg">
        <!-- int img -> :src="getTopRankUser.getAvatar()"" -->
        <img :src="getTopRankUser.getAvatar()" alt="" class="user--avatar" />
      </div>
      <div class="content--name">
        <p>{{ user.getName() }}</p>
      </div>
      <div class="content--score"></div>
    </div>
    <div class="wrapper__footer" v-if="topUserList.length > 0">
      <div class="footer--rank">
        <p>{{ getTopRankUser.getRank() }}</p>
      </div>
      <div class="footer--userImg">
        <!-- int img -> :src="getTopRankUser.getAvatar()"" -->
        <img :src="getTopRankUser.getAvatar()" alt="" class="user--avatar" />
      </div>
      <div class="footer--name">
        <p>{{ getTopRankUser.getName() }}</p>
      </div>
      <div class="footer--score"><p></p></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TopUser } from "@/shared/models/topPerform/topUser";

export default defineComponent({
  name: "TopPerform",

  props: {
    topUserList: {
      type: Array,
      required: true,
    },
  },

  computed: {
    getTopRankUser() {
      return this.topUserList[0] as TopUser;
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  // padding-bottom: 20px;
  justify-items: center;
  font-size: 12px;
  height: 100%;

  .wrapper__header,
  .wrapper__content,
  .wrapper__footer {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 20% 40% 20%;
    justify-items: center;
    align-items: center;
    color: #302f4e;
    font-weight: 500;
  }

  .wrapper__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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

  .wrapper__header {
    color: #302f4e;
    font-weight: 500;
    font-size: 12px;
  }

  .wrapper__footer {
    border: 1px solid #9288c1;
    border-radius: 10px;
  }

  .title {
    color: #302f4e;
    font-weight: 500;
    padding-bottom: 20px;
  }

  .user--avatar {
    width: 35px;
    height: 35px;
    clip-path: circle();
  }
}
</style>
