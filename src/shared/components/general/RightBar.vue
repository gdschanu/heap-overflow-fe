<template>
  <RightBarLayout>
    <template #process--content
      ><ProgressTable :progressList="progressList"
    /></template>
    <template #topPerform--content
      ><TopPerform :topUserList="topUserList"
    /></template>
  </RightBarLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RightBarLayout from "../general/RightBarMenu/RightBarLayout.vue";
import ProgressTable from "../general/RightBarMenu/ProgressTable.vue";
import TopPerform from "../general/RightBarMenu/TopPerform.vue";
import { Progress } from "@/shared/models/progress/progress";
import { TopUser } from "@/shared/models/topPerform/topUser";
import { getProgress } from "@/shared/models/progress/domainLogic/progress";
import { getTopUsers } from "@/shared/models/topPerform/domainLogic/topUser";

export default defineComponent({
  name: "RightBar",

  components: {
    RightBarLayout,
    ProgressTable,
    TopPerform,
  },

  data() {
    return {
      progressList: [] as Progress[],
      topUserList: [] as TopUser[],
    };
  },

  async created() {
    // progress
    const progressResponse = await getProgress();
    progressResponse.forEach((progress) => this.progressList.push(progress));
    // console.log(progressResponse);

    // top users
    const topUserResponse = await getTopUsers(0, 5);
    topUserResponse.forEach((user) => this.topUserList.push(user));
    // console.log(topUserResponse);
  },
});
</script>

<style lang="scss" scoped></style>
