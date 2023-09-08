import { MemTypeEnum } from "../enums/MemContentType";

export interface MemType {
  id: string;
  title: string;
  author: string;
  link: string;
  contentType: MemTypeEnum;
}
