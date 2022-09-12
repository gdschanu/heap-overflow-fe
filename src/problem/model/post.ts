import DateTime from "@/shared/models/dateTime";

class Post {
  private id : string;
  private title : string;
  private author: string;
  private createdAt: DateTime;
  private updatedAt: DateTime;
  private content: string;
  private problemId: string;

  constructor({
    id,
    title,
    author,
    createdAt,
    updatedAt,
    content,
    problemId,
  }: {
    id: string
    title: string,
    author: string,
    createdAt: DateTime,
    updatedAt: DateTime,
    content: string,
    problemId: string
  }) {
    this.id = id
    if (title == undefined)
      throw new Error('title must not be undefined')
    this.title = title;
    this.author = author;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    if (content == undefined)
      throw new Error('content must not be undefined')
    this.content = content;
    if (problemId == undefined) 
      throw new Error('problemId must not be undefined')
    this.problemId = problemId
  }

  public setTitle(title : string) : void {
    if (title == undefined) 
      throw new Error('title must not be undefined')
    this.title = title
  }

  public setContent(cont : string) : void {
    if (cont == undefined)
      throw new Error('content must not be undefined')
    this.content = cont
  }

  public setId(id : string) : void {
    if (this.id != undefined)
      throw new Error('id has already been set')
    this.id = id;
  }

  public getTitle() : string {
    return this.title;
  }
  
  public getAuthor() : string {
    return this.author;
  }

  public getCreatedAt() : DateTime {
    return this.createdAt;
  }

  public getUpdatedAt() : DateTime {
    return this.updatedAt;
  }

  public getContent() : string {
    return this.content;
  }

  public getNumberOfComments() : string {
    return '10';
  }

  public getProblemId() : string {
    return this.problemId
  }
};

export default Post;