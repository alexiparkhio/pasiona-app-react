import axios from 'axios';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const deleteCard = async (cardId) => {
	try {
		await axios.delete(`http://${DOMAIN}:${PORT}/api/card/${cardId}`);
	} catch (error) {
		throw error;
	}
}