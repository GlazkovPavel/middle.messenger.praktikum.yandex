import {IUser} from "../../shared/interfaces/user.interface";

export interface ChatInfo {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  created_by: number;

  last_message: {
    user: IUser,
    time: string;
    content: string;
  }
}
