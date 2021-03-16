import axios from 'axios';
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const updateCard = async (cardId, body) => {
	try {
		await axios.patch(`${DOMAIN}/api/card/${cardId}`, { ...body });
	} catch (error) {
		throw error;
	}
}