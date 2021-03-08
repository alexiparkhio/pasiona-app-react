import * as actions from './actions';

import { retrieveCards } from '../../services/retrieveCards';

export const getCardsData = () => async (dispatch) => {
	dispatch(actions.cardsGetRequest());

	try {
		const response = await retrieveCards();
		dispatch(actions.cardsGetSuccess(response));
	} catch (error) {
		dispatch(actions.cardsGetError(error));
	}
};