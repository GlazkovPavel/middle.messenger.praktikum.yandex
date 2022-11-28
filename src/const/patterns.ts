import {IPattern} from '../components/shared/interfaces/pattern.interface';

export const patterns: Record<string, IPattern> = {
  login: {
    error: "2-16 symbols",
    regExp: /(?!^\d+$)^[a-zA-Z0-9_-]{2,16}$/,
  },
  email: {
    error: "please use something@any.com",
    regExp: /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})$/,
  },
  name: {
    error: "2-15 symbols from capital letter",
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{2,15}$/,
  },
  username: {
    error: "2-15 symbols from capital letter",
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{2,15}$/,
  },
  surname: {
    error: "2-15 symbols from capital letter",
    regExp: /^[А-ЯA-Z]{1}[а-яa-z0-9_-]{2,15}$/,
  },
  phone: {
    error: "10-15 numbers",
    regExp: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
  },
  nameInChat: {
    error: "2-15 symbols",
    regExp: /^[а-яa-zА-ЯA-Z0-9_-]{2,15}$/,
  },
  password: {
    error: "8-40 symbols (at least 1 number, 1 capital)",
    regExp: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40})$/,
  },
  cpassword: {
    error: "8-40 symbols (at least 1 number, 1 capital)",
    regExp: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40})$/,
  },
  inputMessage: {
    error: "write something",
    regExp: /(.|\s)*\S(.|\s)*$/,
  },
};
