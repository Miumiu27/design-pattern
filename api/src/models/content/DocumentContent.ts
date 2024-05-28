import { Content, ContentType } from './Content';

class DocumentContent implements Content {
  content_id: number;
  title: string;
  contentType: ContentType = ContentType.Document;
  createdAt: Date;
  lastModifiedAt: Date;
  status: string;
  body: string;

  constructor(content_id: number, title: string,  createdAt: Date, lastModifiedAt: Date, status: string, body: string) {
    this.content_id = content_id;
    this.title = title;
    this.createdAt = createdAt;
    this.lastModifiedAt = lastModifiedAt;
    this.status = status;
    this.body = body;
  }
}

export default DocumentContent;
