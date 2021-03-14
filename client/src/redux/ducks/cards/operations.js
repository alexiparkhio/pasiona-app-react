import * as actions from './actions';

import {
	createCard,
	retrieveCards,
	updateCard,
	deleteCard
} from '../../services';

export const postCardData = body => async (dispatch) => {
	dispatch(actions.cardsPostRequest());

	try {
		await createCard(body);
		dispatch(actions.cardsPostSuccess())
		dispatch(getCardsData());
	} catch (error) {
		dispatch(actions.cardsPostError(error));
	}
}

export const getCardsData = () => async (dispatch) => {
	dispatch(actions.cardsGetRequest());

	try {
		const response = await retrieveCards();
		dispatch(actions.cardsGetSuccess(response));
	} catch (error) {
		dispatch(actions.cardsGetError(error));
	}
};

export const patchCardData = (cardId, body) => async (dispatch) => {
	dispatch(actions.cardsPatchRequest());

	try {
		await updateCard(cardId, body);
		dispatch(actions.cardsPatchSuccess());
		dispatch(getCardsData());
	} catch (error) {
		dispatch(actions.cardsPatchError(error));
	}
};

export const deleteCardData = cardId => async (dispatch) => {
	dispatch(actions.cardsDeleteRequest());

	try {
		await deleteCard(cardId);
		dispatch(actions.cardsDeleteSuccess());
		dispatch(getCardsData());
	} catch (error) {
		dispatch(actions.cardsDeleteError(error));
	}
};