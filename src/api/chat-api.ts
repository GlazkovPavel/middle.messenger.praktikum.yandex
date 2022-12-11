import {BaseAPI} from './base-api';
import {HTTPTransport} from '../utils/api';

const chatAPIInstance = new HTTPTransport("api/v1/chats");

export class ChatAPI extends BaseAPI {
  create() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.post('/', {});
  }

  request() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('/full', {});
  }

  update() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('/full', {});
  }

  delete() {
    // Здесь уже не нужно писать полный путь /api/v1/chats/
    return chatAPIInstance.get('/full', {});
  }
}
