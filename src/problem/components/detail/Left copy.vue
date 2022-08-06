<template>
    <div class="problem-left">
        <TabBar
            :tabBarList="['Problem', 'Solution', 'Discussion', 'Submission']"
            class="tab-bar"
            notBorder="top"
            :selected="tabBarSelected"
            @selectUpdated="
                (value) => {
                    tabBarSelected = value;
                }
            "
        >
            <template v-slot:Problem>
                <MarkdownRender
                    :description="problem.getDescription()"
                    class="problem-description"
                />
            </template>
            <template v-slot:Solution>
                <p>solution</p>
            </template>
            <template v-slot:Discussion>
                <p>discussion</p>
            </template>
            <template v-slot:Submission>
                <Submissions />
            </template>
            <template v-slot:Problem-icon>
                <Icon icon="fa:free-code-camp" width="27"/>
            </template>
            <template v-slot:Solution-icon>
                <Icon icon="fluent:brain-circuit-20-regular" width="20"/>
            </template>
            <template v-slot:Discussion-icon>
                <Icon icon="octicon:comment-discussion-24" width="20"/>
            </template>
            <template v-slot:Submission-icon>
                <Icon icon="akar-icons:check-box" width="20"/>
            </template>
        </TabBar>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue";

import TabBar from "./ProblemTabBar";
import MarkdownRender from "../../general/MarkdownRender";
import Submissions from "./LeftSubmissions";

export default {
    name: "ProblemLeft",
    props: {
        problem: Object,
        tabBarSelected: 0,
    },
    components: {
        TabBar,
        MarkdownRender,
        Submissions,
        Icon,
    },
};
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