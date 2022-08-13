import Post from "../post";
import { GetPostsResp, getPostsApi } from '../api/getPostsApi'
import DateTime from "@/shared/models/dateTime";

export async function getPosts(page : number, perPage : number) : Promise<Post[]> {
  const resps : GetPostsResp[] = await getPostsApi(page, perPage);
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

export async function countPosts() : Promise<number> {
  return 10
}