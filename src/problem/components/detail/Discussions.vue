<template>
    <div class="discussion">
        <table>
            <tr>
                <th>Title</th>
                <th>Created At</th>
                <th>Comments</th>
                <th>Like</th>
                <th>Dislike</th>
            </tr>
            <tr v-for="post in posts" class="row">
                <td class="title">{{post.getTitle()}}</td>
                <td>{{post.getCreatedAt().toString()}}</td>
                <td>{{post.getNumberOfComments()}}</td>
                <td>10</td>
                <td>20</td>
            </tr>
        </table>
        <div class="pagination-container">
            <div class="pagination">
                <a href="#">&laquo;</a>
                <span v-for="index in countPages()">
                    <a v-if="index-1 == currentPage" class="active">{{index}}</a>
                    <a 
                        v-if="index-1 != currentPage"
                        @click="goToPage(index-1)"
                    >{{index}}</a>
                </span>
                <a href="#">&raquo;</a>
            </div>
        </div>
    </div>
</template>

<script>
import { countPosts, getPosts } from '../../model/domainLogic/getPost'
export default {
    name: "Discussions",
    data() {
        return {
            posts: [],
            perPage: 2,
            total: 0,
            countPages () {
                return Math.ceil(this.total / this.perPage)
            },
            currentPage: 0,
            async goToPage(page) {
                this.currentPage = page
                this.posts = await getPosts(this.currentPage, this.perPage, this.problemId)
                this.total = await countPosts()
            }
        }
    },
    created() {
        (async () => {
            this.posts = await getPosts(this.currentPage, this.perPage, this.problemId)
            this.total = await countPosts()
        })()
    },
    props: ['problemId']
};
</script>

<style lang="scss" scoped>

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