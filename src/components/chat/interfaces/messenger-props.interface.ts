import {Message} from "./message.interface";
import {IUser} from "../../shared/interfaces/user.interface";

export interface MessengerProps {
  selectedChat: number | undefined;
  messages: Message[];
  userId: number;
  users: IUser[];
}
