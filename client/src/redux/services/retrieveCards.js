import axios from 'axios';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const retrieveCards = async () => {
	try {
		const cards = await axios.get(`http://${DOMAIN}:${PORT}/api/cards`);
		return cards;
	} catch (error) {
		throw error;
	}
}