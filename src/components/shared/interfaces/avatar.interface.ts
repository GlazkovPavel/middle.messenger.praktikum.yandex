export interface IAvatar {
  avatar?: string;
  photo?: string;
  first_name?: string;
  className?: string;
  events?: {
    click: (e: Event) => void;
  };
}
