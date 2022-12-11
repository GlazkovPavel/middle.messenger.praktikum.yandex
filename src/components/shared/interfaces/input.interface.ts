import {ITypeName} from "./type-name.interface";

export interface IInputProps extends ITypeName{
    placeholder?: string;
    dataName?: string;
    minlength?: string;
    value?: string;
    required?: string;
    events?: {
      focusin: (e: Event) => void;
      focusout: (e: Event) => void;
    };
}
