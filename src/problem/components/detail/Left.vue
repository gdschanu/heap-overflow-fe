<template>
    <div class="problem-left">
        <TabBar :tabBarList="tabBarList" class="tab-bar" notBorder="top"
            :selected="tabBarSelected" @selectUpdated="(value) => { tabBarSelected = value; }">
            <template v-slot:Problem>
                <LeftDescription class="p-5" />
            </template>
            <template v-slot:Discussion>
               <Discussion :problemId="problem.getId()"/>
            </template>
            <template v-slot:Submission>
                <Submissions @selectUpdated="(value) => { tabBarSelected = value; }" v-if="coder" />
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
import Submissions from "./LeftSubmissions.vue";
import Problem from "@/problem/model/problem";
import { ref, Ref, watch } from "vue";
import Discussion from "./discussion/Discussions.vue"
import { useStore } from "vuex";
import { computed, ComputedRef } from "@vue/reactivity";
import LeftDescription from "./LeftDescription.vue";
import Coder from "@/coder/coder";

const store = useStore()
const problem = computed(() => store.state.problemStore.problem) as Ref<Problem>
const runningSubmissionId = computed(() => store.state.problemStore.runningSubmissionId) as Ref<string | null>
const coder: ComputedRef<Coder | null> = computed(() => store.state.coderStore.coder)
const tabBarSelected = ref(0)

watch(runningSubmissionId, async () => {
    tabBarSelected.value = 3
})

const tabBarList = computed(() => {
    if (coder.value) {
        return ['Problem', 'Discussion', 'Submission']
    } else {
        return ['Problem', 'Discussion']
    }
})
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