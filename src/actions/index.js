import * as letterboxdActions from './letterboxd';
import * as loginActions from './login';

export const actionTypes = {
	...letterboxdActions.actionTypes,
	...loginActions.actionTypes,
}

export const actions = {
	...letterboxdActions.actions,
	...loginActions.actions,
};