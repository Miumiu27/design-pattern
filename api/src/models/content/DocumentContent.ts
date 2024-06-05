import { Content, ContentType } from './Content';

class DocumentContent implements Content {
  content_id: number;
  title: string;
  contentType: ContentType = ContentType.Document;
  createdAt: Date;
  lastModifiedAt: Date;
  status: string;
  body: string;
  user_id:number

  constructor(content_id: number, title: string,  createdAt: Date, lastModifiedAt: Date, status: string, body: string,user_id:number) {
    this.content_id = content_id;
    this.title = title;
    this.createdAt = createdAt;
    this.lastModifiedAt = lastModifiedAt;
    this.status = status;
    this.body = body;
    this.user_id = user_id;
  }
}

export default DocumentContent;
