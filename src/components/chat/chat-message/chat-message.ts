import template from './chat-message.hbs';
import {Block} from '../../../utils/block';
import {ChatProps} from "../interfaces/chat-props.interface";
import withStore from "../../../hoc/hoc";

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {...this.props, isSelected: this.props.id === this.props.selectedChat?.id});
  }
}

export const withSelectedChat = withStore(state => ({selectedChat: (state.chats || []).find(({id}) => id === state.selectedChat)}));

export const ChatMessage = withSelectedChat(ChatBase as typeof Block);

