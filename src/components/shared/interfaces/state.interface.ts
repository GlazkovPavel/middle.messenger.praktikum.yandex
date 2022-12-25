import {IUser} from "./user.interface";
import {ChatInfo} from "../../chat/interfaces/chat-info.interface";
import {Message} from "../../chat/interfaces/message.interface";

export interface IState {
  user: IUser;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat: number;
}