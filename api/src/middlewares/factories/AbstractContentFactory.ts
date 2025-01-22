import { Content } from "../../models/content/Content";


interface AbstractContentFactory {
  createDocumentContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    body: string,
    user_id:number
  ): Content;
  createImageContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string ,
    user_id:number
  ): Content;
  createVideoContent(
    id: number,
    title: string,
    createdAt: Date,
    lastModifiedAt: Date,
    status: string,
    path: string ,
    user_id:number
  ): Content;
}

export default AbstractContentFactory;
