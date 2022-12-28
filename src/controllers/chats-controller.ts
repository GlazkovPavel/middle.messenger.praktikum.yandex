import store from "../utils/store";
import API, {ChatsAPI} from "../api/chats-api";
import MessagesController from "./messages-controller";
import AuthController from "./auth-controller";
import {IUser} from "../components/shared/interfaces/user.interface";

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    await this.api.create(title);

    this.fetchChats();
  }

  async fetchChats() {
    if (!store.getState().user?.id) {
      await AuthController.fetchUser();
    }
    const chats = await this.api.read();

    chats.map(async (chat) => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  addUserToChat(id: number, userId: number) {
    this.api.addUsers(id, [userId]);
  }

  async getUsersChat(id: number) {
    try {
      const users: IUser[] = await this.api.getUsers(id);
      store.set('selectedChat.users', users);
      return users;
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async deleteUserFromChat(id: number, userId: number) {
    await this.api.deleteUsers(id, [userId]);
    await this.fetchChats();
  }

  async delete(id: number) {
    await this.api.delete(id);

    await this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat.id', id);
  }
}

const controller = new ChatsController();


export default controller;
