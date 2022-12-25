import template from './chat-list.hbs';
import {ChatMessage} from "../chat-message/chat-message";
import {Block} from '../../../utils/block';
import {Button} from "../../shared/components/button";
import router from "../../../utils/router";
import {ChatsListProps} from "../interfaces/chats-list-props.interface";
import withStore from "../../../hoc/hoc";
import ChatsController from "../../../controllers/chats-controller";
import {Input} from "../../shared/components/input/input";

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({...props});
  }

  init() {
    this.children.chats = this.createChats(this.props);

    this.children.input = new Input({
      placeholder: 'Создать чат...',
      name: 'inputCreate',
      class: 'input',
      id: 'input-create',
      type: 'text'
    })

    this.children.button = new Button({
      label: 'В профиль ->',
      id: 'profile',
      class: 'container__button sign-up router',
      events:  {
        click: (): void => {
          this.goToProfile()
        },
      },
    });

    this.children.buttonCreateChat = new Button({
      label: 'Создать чат',
      id: 'button-create',
      class: 'container__button sign-up router',
      events:  {
        click: (): void => {
          this.createNewChat()
        },
      },
    });
  }

  render() {
    return this.compile(template, {...this.props});
  }

  protected componentDidUpdate(_oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private goToProfile(): void {
    router.go('/setting')
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new ChatMessage({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          }
        }
      });
    })
  }

  private createNewChat() {
    const button: HTMLButtonElement = document.querySelector('#button-create') as HTMLButtonElement;
    const input: HTMLInputElement = document.querySelector('#input-create') as HTMLInputElement;
    button!.addEventListener('click', () => {
      if (input.value) {
        ChatsController.create(input.value)
      }
      return;
    })
  }
}

export const withChats = withStore((state) => ({chats: [...(state.chats || [])]}));

export const ChatList = withChats(ChatsListBase as typeof Block);
