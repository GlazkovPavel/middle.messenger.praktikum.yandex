import {ChatInfo} from "./chat-info.interface";

export interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}
