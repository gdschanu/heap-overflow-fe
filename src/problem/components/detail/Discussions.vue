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
                <a href="#">1</a>
                <a class="active" href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    </div>
</template>

<script>
import { getPosts } from '../../model/domainLogic/getPost'
export default {
    name: "Discussions",
    data() {
        return {
            posts: []
        }
    },
    created() {
        (async () => {
            this.posts = await getPosts(0, 0)
        })()
    }
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