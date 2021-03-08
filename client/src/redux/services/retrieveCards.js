import axios from 'axios';

export const retrieveCards = async () => {
	try {
		const cards = await axios.get('http://localhost:8085/api/cards');
		return cards;
	} catch (error) {
		throw error;
	}
}