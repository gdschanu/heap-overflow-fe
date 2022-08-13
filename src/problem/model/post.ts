import DateTime from "@/shared/models/dateTime";

class Post {
  private title : string;
  private author: string;
  private createdAt: DateTime;
  private updatedAt: DateTime;
  private content: string;

  constructor({
    title,
    author,
    createdAt,
    updatedAt,
    content
  }: {
    title: string,
    author: string,
    createdAt: DateTime,
    updatedAt: DateTime,
    content: string
  }) {
    this.title = title;
    this.author = author;
    this.createdAt =createdAt;
    this.updatedAt = updatedAt;
    this.content = content;
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
};

export default Post;