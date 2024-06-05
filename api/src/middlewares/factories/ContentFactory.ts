import AbstractContentFactory from "./AbstractContentFactory";
import { Content } from "../../models/content/Content";
import DocumentContent from "../../models/content/DocumentContent";
import ImageContent from "../../models/content/ImageContent";
import VideoContent from "../../models/content/VideoContent";

class ContentFactory implements AbstractContentFactory {
  createDocumentContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    body: string,
    user_id :number
  ): Content {
    return new DocumentContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      body,
      user_id
    );
  }

  createImageContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string ,
    user_id :number
  ): Content {
    return new ImageContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      path,
      user_id
    );
  }

  createVideoContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string ,
    user_id:number
  ): Content {
    return new VideoContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      path,
      user_id
    );
  }
}

export default ContentFactory;
