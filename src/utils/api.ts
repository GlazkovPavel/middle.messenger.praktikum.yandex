import {Methods} from '../components/shared/enums/methods.enum';
import {IOptions} from "../components/shared/interfaces/options.interface";
import {PATH} from "../api/const-api";
import {queryStringify} from "./helpers";

export class HTTPTransport {
  static API_URL = PATH.baseURL;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get<Response>(path = "/"): Promise<Response> {
    return this.request<Response>(this.endpoint + path);
  }

  public post<Response>(
    path: string,
    data?: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.POST,
      data,
    });
  }

  public put<Response = void>(path: string, data: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.PUT,
      data,
    });
  }

  public patch<Response = void>(
    path: string,
    data: unknown
  ): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.PATCH,
      data,
    });
  }

  public delete<Response>(path: string, data?: unknown): Promise<Response> {
    return this.request<Response>(this.endpoint + path, {
      method: Methods.DELETE,
      data,
    });
  }

  private request<Response>(
    url: string,
    options: IOptions = { method: Methods.GET }
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const isGetMethod = method === Methods.GET;

      xhr.open(method, isGetMethod && !!data ? `${url}${queryStringify(data)}` : url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });
      xhr.timeout = 5000;

      if (!(data instanceof FormData)) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === Methods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data instanceof FormData ? data : JSON.stringify(data));
      }
    });
  }
}
