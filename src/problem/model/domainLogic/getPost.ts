import Post from "../post";
import { GetPostsResp, getPostsApi, countPostsApi } from '../api/getPostsApi'
import DateTime from "@/shared/models/dateTime";

export async function getPosts(page : number, perPage : number, problemId : string) : Promise<Post[]> {
  const resps : GetPostsResp[] = await getPostsApi(page, perPage, problemId);
  const posts : Post[] = [];
  for (const resp of resps) {
    posts.push(new Post({
      title: resp.title,
      author: resp.author,
      createdAt: new DateTime(resp.createdAt),
      updatedAt: new DateTime(resp.updatedAt),
      content: resp.content
    }))
  }
  return posts;
}

export async function countPosts(problemId : string) : Promise<number> {
  return await countPostsApi(problemId);
}