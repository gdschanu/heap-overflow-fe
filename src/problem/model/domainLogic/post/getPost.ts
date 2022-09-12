import Post from "../../post";
import { GetPostsResp, getPostsApi, countPostsApi } from '../../api/post/getPostsApi'
import DateTime from "@/shared/models/dateTime";

export async function getPosts(page : number, perPage : number, problemId : string) : Promise<Post[]> {
  const resps : GetPostsResp[] = await getPostsApi(page, perPage, problemId);
  const posts : Post[] = [];
  for (const resp of resps) {
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

export async function countPosts(problemId : string) : Promise<number> {
  return await countPostsApi(problemId);
}