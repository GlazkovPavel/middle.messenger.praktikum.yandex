import {Methods} from '../enums/methods.enum';

export interface IHttpRequest {
  method: Methods;
  data?: any;
  timeout?: number;
  headers?: Record<string, string>;
}
