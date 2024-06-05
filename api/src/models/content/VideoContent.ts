import { Content, ContentType } from './Content';

class VideoContent implements Content {
    content_id: number;
    title: string;
    contentType: ContentType = ContentType.Video;
    createdAt: Date;
    lastModifiedAt: Date;
    status: string;
    path: string ;
    user_id:number

    constructor(content_id: number, title: string, createdAt: Date, lastModifiedAt: Date, status: string,path: string ,user_id:number) {
        this.content_id = content_id;
        this.title = title;
        this.createdAt = createdAt;
        this.lastModifiedAt = lastModifiedAt;
        this.status = status;
        this.path = path;
        this.user_id = user_id;
    }
}

export default VideoContent;
