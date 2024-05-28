import { Content } from "../../models/content/Content";

interface AbstractContentFactory {
  createDocumentContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    body: string
  ): Content;
  createImageContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string 
  ): Content;
  createVideoContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string 
  ): Content;
}

export default AbstractContentFactory;
