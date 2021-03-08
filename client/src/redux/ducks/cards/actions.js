import { types } from './types';

export const cardsGetRequest = () => ({
	type: types.CARDS_GET_REQUEST
});

export const cardsGetSuccess = data => ({
	type: types.CARDS_GET_SUCCESS,
	data
});

export const cardsGetError = error => ({
	type: types.CARDS_GET_ERROR,
	error
});

export const cardsPostRequest = () => ({
	type: types.CARDS_POST_REQUEST
});

export const cardsPostSuccess = () => ({
	type: types.CARDS_POST_SUCCESS
});

export const cardsPostError = error => ({
	type: types.CARDS_POST_ERROR,
	error
});

export const cardsPatchRequest = () => ({
	type: types.CARDS_PATCH_REQUEST
});

export const cardsPatchSuccess = () => ({
	type: types.CARDS_PATCH_SUCCESS
});

export const cardsPatchError = error => ({
	type: types.CARDS_PATCH_ERROR,
	error
});

export const cardsDeleteRequest = () => ({
	type: types.CARDS_DELETE_REQUEST
});

export const cardsDeleteSuccess = () => ({
	type: types.CARDS_DELETE_SUCCESS
});

export const cardsDeleteError = error => ({
	type: types.CARDS_DELETE_ERROR,
	error
});

