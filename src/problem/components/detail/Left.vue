<template>
    <div class="problem-left">
        <TabBar :tabBarList="['Problem', 'Solution', 'Discussion', 'Submission']" class="tab-bar" notBorder="top"
            :selected="tabBarSelected" @selectUpdated="(value) => { tabBarSelected = value; }">
            <template v-slot:Problem>
                <MarkdownRender :description="problem.getDescription()" class="problem-description" />
            </template>
            <template v-slot:Solution>
                <p>solution</p>
            </template>
            <template v-slot:Discussion>
               <Discussion :problemId="problem.getId()"/>
            </template>
            <template v-slot:Submission>
                <Submissions />
            </template>
            <template v-slot:Problem-icon>
                <i class="fa-solid fa-fire"></i>
            </template>
            <template v-slot:Solution-icon>
                <i class="fa-solid fa-brain"></i>
            </template>
            <template v-slot:Discussion-icon>
                <i class="fa-solid fa-comments"></i>
            </template>
            <template v-slot:Submission-icon>
                <i class="fa-solid fa-square-check"></i>
            </template>
        </TabBar>
    </div>
</template>

<script lang="ts" setup>
import TabBar from "./ProblemTabBar.vue";
import MarkdownRender from "../../components/common/MarkdownRender.vue";
import Submissions from "./LeftSubmissions.vue";
import Problem from "@/problem/model/problem";
import { ref, Ref } from "vue";
import Discussion from "./Discussions.vue"
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>

const tabBarSelected = ref(0)
</script>

<style lang="scss" scoped>
.problem-left {
    width: 100%;
    height: 100%;

    .problem-description {
        padding: 10px;
    }
}
</style>