import {Message} from "./message.interface";

export interface MessengerProps {
  selectedChat: number | undefined;
  messages: Message[];
  userId: number;
}
