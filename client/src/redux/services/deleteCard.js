import axios from 'axios';
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const deleteCard = async (cardId) => {
	try {
		await axios.delete(`${DOMAIN}/api/card/${cardId}`);
	} catch (error) {
		throw error;
	}
}