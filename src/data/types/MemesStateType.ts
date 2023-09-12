import { MemType } from "./MemType";

export interface MemesStateType {
  all: Array<MemType>;
  isFetching: boolean;
  isMutating: boolean;
}
