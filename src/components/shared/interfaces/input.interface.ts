import {ITypeName} from "./type-name.interface";

export interface IInputProps extends ITypeName{
    placeholder?: string;
    dataName?: string;
    minlength?: string;
    value?: string;
    required?: string;
}
