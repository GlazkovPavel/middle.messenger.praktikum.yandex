import BaseAPI from "./base-api";

export class UserApi extends BaseAPI {
  constructor() {
    super("/user");
  }

  create = undefined;
  update = undefined;
  delete = undefined;
  read = undefined;
}
