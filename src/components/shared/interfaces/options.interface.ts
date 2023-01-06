import {Methods} from "../enums/methods.enum";

export interface IOptions {
  method: Methods;
  data?: any;
  headers?: Record<string, string>;
}
