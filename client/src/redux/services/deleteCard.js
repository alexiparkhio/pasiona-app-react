import axios from 'axios';

export const deleteCard = async (cardId) => {
	try {
		await axios.delete(`http://localhost:8085/api/card/${cardId}`);
	} catch (error) {
		throw error;
	}
}