<template>
  <div class="nav-layout">
    <div class="nav-container" v-if="routeCheck">
      <div class="nav">
        <div class="logo">
          <div class="logo-img">
            <img
              src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="logo"
            />
          </div>
          <h2 class="logo-title">Hanu Code</h2>
        </div>

        <div class="page-group">
          <router-link
            v-for="(route, index) in routeList.filter(
              (route, i) => i < routeList.length - 2
            )"
            :key="index"
            :to="route.path"
            :class="
              'page ' +
              ($route.path.startsWith(route.path) ? 'router-link-active' : '')
            "
          >
            <div class="ver-line"></div>
            <i :class="route.icon"></i>
            <span>{{ route.name }}</span>
          </router-link>
          <!-- to length-3 -->
          <hr />
          <!-- route from length-2 -->
          <router-link
            v-for="(route, index) in routeList.filter(
              (route, i) => i >= routeList.length - 2
            )"
            :key="index"
            :to="route.path"
            :class="
              'page ' +
              ($route.path.startsWith(route.path) ? 'router-link-active' : '')
            "
          >
            <div class="ver-line"></div>
            <i :class="route.icon"></i>
            <span>{{ route.name }}</span>
          </router-link>
          <!-- to length-1 (end) -->
        </div>
      </div>
    </div>
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Nav",
  data() {
    return {
      routeList: [
        {
          path: "/",
          name: "Home",
          icon: "fa-solid fa-house",
        },
        {
          path: "/problem",
          name: "Problem",
          icon: "fa-solid fa-computer",
        },
        {
          path: "/contest",
          name: "Contest",
          icon: "fa-brands fa-free-code-camp",
        },
        {
          path: "/discussion",
          name: "Discussion",
          icon: "fa-solid fa-comment",
        },
        {
          path: "/ranking",
          name: "Ranking",
          icon: "fa-solid fa-ranking-star",
        },
        {
          path: "/help",
          name: "Help",
          icon: "fa-solid fa-circle-question",
        },
        {
          path: "/setting",
          name: "Setting",
          icon: "fa-solid fa-gear",
        },
      ],
    };
  },

  computed: {
    routeCheck() {
      // because vue router component load is async, this.$route is changed when loading component, which cause a nav view bug
      // check if mete.type is undefined to prevent nav rendered in the first load
      // if (this.$route.meta.type === undefined) return false;

      // return !(
      //   this.$route.meta.type === "auth" ||
      //   this.$route.meta.type === "public" ||
      //   this.$route.meta.type === "detail"
      // );
      return true;
    },
    routerLinkActive() {},
  },
};
</script>

<style lang="scss" scoped>
i {
  padding-left: 5px;
  padding-right: 5px;
}

.nav-layout {
  border: 1px solid blue;
  display: flex;
}

.nav-container {
  border: 1px solid blue;
  position: relative;
  .nav {
    position: sticky;
    top: 0;
    width: 200px;
  }
}

.content-container {
  flex: 1 1 auto;
}

a {
  text-decoration: none !important;
}

#nav {
  @apply relative h-screen bg-white dark:bg-slate-900;
}

.fixed-content {
  @apply sticky;
}

.fixed-content > a {
  @apply flex p-2 align-middle;
  img {
    @apply w-1/3;
    @media (max-width: 800px) {
      @apply w-full;
    }
  }
  h4 {
    @apply text-center w-2/3;
    @media (max-width: 800px) {
      @apply hidden;
    }
  }
}

.page-group {
  @apply mt-2;
  a.page {
    @apply relative flex items-center p-3 text-slate-400 dark:text-slate-500;
    .iconify {
      @apply mr-1;
    }
    span {
      @media (max-width: 800px) {
        @apply hidden;
      }
    }
    @media (max-width: 800px) {
      @apply justify-center;
    }
  }
  a.router-link-active {
    font-weight: bold;
    @apply text-slate-800 dark:text-slate-50;
    .ver-line {
      @apply block absolute w-1 left-0 rounded-r inset-y-1 bg-slate-800 dark:bg-slate-50;
    }
  }
  hr {
    @apply w-5/6 m-auto my-2 border-t border-slate-900 dark:border-slate-400;
  }
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-title {
  padding-left: 5px;
  font-size: 25px;
}
.logo-img {
  flex-basis: 70%;
  order: 0;
}
</style>
