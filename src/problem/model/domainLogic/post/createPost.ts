import Post from "../../post";
import { Resp, Req, createPostApi } from '../../api/post/createPostApi'

export async function createPost(post : Post) : Promise<void> {
    const resp : Resp = await createPostApi(post.getProblemId(), <Req>{
      content: post.getContent(),
      title: post.getTitle()
    })
    post.setId(resp.data)
}