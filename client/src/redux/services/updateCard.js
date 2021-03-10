import axios from 'axios';

export const updateCard = async (cardId, body) => {
	try {
		await axios.patch(`http://localhost:8085/api/card/${cardId}`, { ...body });
	} catch (error) {
		throw error;
	}
}