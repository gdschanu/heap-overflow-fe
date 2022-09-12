<template>
    <div class="discussion">
        <button class="createpost" @click="renderCreatePostBox()">Open create post form</button>
        <div v-if="isRenderCreatePostBox">
            <label>Title</label>
            <input type="text" v-model="createPostTitle" placeholder="Insert title here">

            <label>Content</label>
            <textarea class="create-post-content" v-model="createPostContent" placeholder="Insert content here"></textarea>
        
            <button class="create-post-btn" @click="createPost()">Submit</button>
        </div>
        <table class="table">
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
    <Paging v-if="renderPaging" :perPage="perPage" :total="total" :moveToPageHandler="moveToPageHandler"/>
</template>

<script>
import { countPosts, getPosts } from '../../../model/domainLogic/post/getPost'
import Paging from '../../../../shared/paging/Paging.vue'
import Post from '../../../model/post'
import { createPost } from '../../../model/domainLogic/post/createPost'
import Button from '@/coder/components/Button.vue'
export default {
    name: "Discussions",
    data() {
        return {
            posts: [],
            total: 0,
            perPage: 20,
            moveToPageHandler: async (page) => {
                this.posts = await getPosts(page-1, this.perPage, this.problemId)
            },
            renderPaging: false,
            isRenderCreatePostBox: false,
            renderCreatePostBox: () =>  {
                this.isRenderCreatePostBox = !this.isRenderCreatePostBox
            },
            createPost: async () => {
                const post = new Post({
                    title: this.createPostTitle,
                    content: this.createPostContent,
                    problemId: this.problemId
                })
                await createPost(post);
                alert('Success');
                this.reRenderPosts()
                this.renderCreatePostBox()
            },
            createPostTitle: '',
            createPostContent: '',
            reRenderPosts: async () => {
                this.posts = await getPosts(0, this.perPage, this.problemId)
                this.total = await countPosts(this.problemId)
                this.renderPaging = true;
            }
        }
    },
    created() {
        (async () => {
            this.posts = await getPosts(0, this.perPage, this.problemId)
            this.total = await countPosts(this.problemId)
            this.renderPaging = true;
        })()
    },
    props: ['problemId'],
    components: {
        Paging,
        Button,
    }
};
</script>

<style lang="scss" scoped>
.table {
    margin-top: 20px;
}

.createpost {
    margin-top: 10px;
    margin-bottom: 10px;
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
.row:hover {
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
tr:hover td {
    background-color: gainsboro;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.create-post-btn {
  width: 100%;
  background-color: rgb(74, 74, 74);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.create-post-btn:hover {
  background-color: rgb(145, 145, 145);
}

.create-post-content {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  height: 200px;
}
</style>