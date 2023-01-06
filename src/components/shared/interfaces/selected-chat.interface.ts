import {IUser} from "./user.interface";

export interface ISelectedChat {
  id: number;
  users?: IUser[];
}
