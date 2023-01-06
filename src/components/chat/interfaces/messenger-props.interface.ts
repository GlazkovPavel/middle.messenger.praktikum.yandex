import {Message} from "./message.interface";
import {IUser} from "../../shared/interfaces/user.interface";
import {ISelectedChat} from "../../shared/interfaces/selected-chat.interface";

export interface MessengerProps {
  selectedChat: ISelectedChat;
  messages: Message[];
  userId: number;
  users: IUser[];
  chatUsers: IUser[];
}
