import {ChatInfo} from "./chat-info.interface";

export interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatInfo;
  created_by: number;
  last_message: Record<string, string>;
  events: {
    click: () => void;
  }
  buttonDelete: {
    click: () => void;
  }
}
