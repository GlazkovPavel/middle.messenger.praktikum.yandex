import template from './chat-message.hbs';
import {Block} from '../../../utils/block';
import {ChatProps} from "../interfaces/chat-props.interface";
import withStore from "../../../hoc/hoc";
import store from "../../../utils/store";

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    let time = this.props.last_message?.time;
    if (time !== undefined) {
      time = new Date(time).toLocaleTimeString().toString().substring(0, 5);
    }

    return this.compile(template, {
      ...this.props,
      isSelected: this.props.id === this.props.selectedChat?.id,
      isMine: this.props?.created_by === store.getState().user?.id,
      time
    });
  }
}

export const withSelectedChat = withStore(state =>
  ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat?.id)}));

export const ChatMessage = withSelectedChat(ChatBase as typeof Block);

