import Post from "../post";
import { Resp, Req, createPostApi } from '../api/post/createPostApi'

import { GetPostsResp, getPostsApi, countPostsApi } from '../api/post/getPostsApi'
import DateTime from "@/shared/models/dateTime";

export async function getPosts(page: number, perPage: number, problemId: string): Promise<Post[]> {
    const response: GetPostsResp[] = await getPostsApi(page, perPage, problemId);
    const posts: Post[] = [];
    for (const resp of response) {
        posts.push(new Post({
            id: resp.id,
            title: resp.title,
            author: resp.author,
            createdAt: DateTime.fromZonedDateTime(resp.createdAt),
            updatedAt: DateTime.fromZonedDateTime(resp.updatedAt),
            content: resp.content,
            problemId
        }))
    }
    return posts;
}

export async function countPosts(problemId: string): Promise<number> {
    return await countPostsApi(problemId);
}

export async function createPost(post: Post): Promise<void> {
    const response: Resp = await createPostApi(post.getProblemId(), <Req>{
        content: post.getContent(),
        title: post.getTitle()
    })
}