interface Content {
    content_id: number;
    title: string;
    contentType: string;
    createdAt: Date;
    lastModifiedAt: Date;
    status: string;
    body?: string;
    path?:string;
}

enum ContentType {
    Document = 'document',
    Image = 'image',
    Video = 'video'
}

export { Content , ContentType } 