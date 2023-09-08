import { MemTypeEnum } from "../enums/MemContentType";

export interface AddMemFormikValues {
  title: string;
  author: string;
  link: string;
  contentType: MemTypeEnum;
}
