import withStore from './hoc';
import {IState} from '../components/shared/interfaces/state.interface';

export const withUser = withStore((state: IState) => ({ ...state.user }));
