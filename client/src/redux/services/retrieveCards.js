import axios from 'axios';
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const retrieveCards = async () => {
	try {
		const cards = await axios.get(`${DOMAIN}/api/cards`);
		return cards;
	} catch (error) {
		throw error;
	}
}