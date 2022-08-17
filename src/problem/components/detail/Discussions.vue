<template>
    <div class="discussion">
        <button class="createpost">Create Post</button>
        <table>
            <tr>
                <th>Title</th>
                <th>Created At</th>
                <th>Comments</th>
                <th>Like</th>
                <th>Dislike</th>
            </tr>
            <tr v-for="post in posts" class="row" :key="post">
                <td class="title">{{post.getTitle()}}</td>
                <td>{{post.getCreatedAt().toString()}}</td>
                <td>{{post.getNumberOfComments()}}</td>
                <td>10</td>
                <td>20</td>
            </tr>
        </table>
    </div>
    <PageManager :perPage="perPage" :total="total" :moveToPageHandler="moveToPageHandler"/>
    <ButtonCounter />
</template>

<script>
import { countPosts, getPosts } from '../../model/domainLogic/getPost'
import PageMangager from './pageManager/PageManager.vue'
import ButtonCounter from './ButtonCounter.vue'
export default {
    name: "Discussions",
    data() {
        return {
            posts: [],
            total: 0,
            perPage: 20,
            moveToPageHandler: async (page) => {
                this.posts = await getPosts(page-1, this.perPage, this.problemId)
            }
        }
    },
    created() {
        (async () => {
            this.posts = await getPosts(0, this.perPage, this.problemId)
            this.total = await countPosts()
        })()
    },
    props: ['problemId'],
    components: {
        PageMangager,
        ButtonCounter
    }
};
</script>

<style lang="scss" scoped>
.createpost {
    margin: 10px;
    padding: 10px;
    background-color: rgb(74, 74, 74);
    color: white;
}

.createpost:hover {
    background-color: rgb(145, 145, 145);
}

.row {
    border-bottom: 1px solid rgb(209, 205, 205);
    
}
.title:hover {
    background-color: gainsboro;
}
.title {
    max-width: auto;
}
.discussion {
    padding: 10px;
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        th,
        td {
            border-collapse: collapse;
            border-spacing: 0;
            padding: 5px;
            text-align: left;
        }
        tr:nth-child(even) {
            background-color: var(--container-color-darker);
        }
        .red {
            color: rgb(255, 70, 70);
        }
        .green {
            color: rgb(43, 223, 43);
        }
    }
}
</style>