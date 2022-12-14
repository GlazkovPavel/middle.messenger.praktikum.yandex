import {ITypeName} from "./type-name.interface";

export interface IButtonProps extends ITypeName{
    label?: string;
    events?: {
      click: (e: Event) => void;
    };
    eventsSubmit?: {
      submit: (e: SubmitEvent) => void;
    };
}
