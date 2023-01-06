export interface IUser {
  email?: string;
  username?: string;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  phone?: string;
  avatar?: string;
  isCanEdit?: boolean;
  id?: number;
  users?: IUser[];
}
