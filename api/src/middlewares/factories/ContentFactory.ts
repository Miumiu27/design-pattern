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
    body: string
  ): Content {
    return new DocumentContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      body
    );
  }

  createImageContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string 
  ): Content {
    return new ImageContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      path
    );
  }

  createVideoContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string 
  ): Content {
    return new VideoContent(
      id,
      title,
      createdAt,
      lastModifiedAt,
      status,
      path
    );
  }
}

export default ContentFactory;
