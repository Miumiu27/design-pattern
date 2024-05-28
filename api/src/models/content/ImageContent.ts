import { Content, ContentType } from './Content';

class ImageContent implements Content {
    content_id: number;
    title: string;
    contentType: ContentType = ContentType.Image;
    createdAt: Date;
    lastModifiedAt: Date;
    status: string;
    path: string ;

    constructor(content_id: number, title: string, createdAt: Date, lastModifiedAt: Date, status: string,path: string ) {
        this.content_id = content_id;
        this.title = title;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
        this.status = status;
        this.path = path;
    }
}

export default ImageContent;
