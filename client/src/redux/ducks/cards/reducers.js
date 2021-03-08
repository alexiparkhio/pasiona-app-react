import { types } from './types';
import { initialState } from '../../../constants';

const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CARDS_GET_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case types.CARDS_GET_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.data,
				fetched: true
			};
		case types.CARDS_GET_ERROR:
			return {
				...state,
				isLoading: false,
				error: {
					message: action.error?.message || 'Oops, something went wrong'
				},
				fetched: true
			};

		default:
			return state;
	}
}

export default cardsReducer;
