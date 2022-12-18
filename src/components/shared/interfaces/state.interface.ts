import {IUser} from "./user.interface";
import {ChatInfo} from "./chat-ifo.interface";
import {Message} from "./message.interface";

export interface State {
  user: IUser;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
}
