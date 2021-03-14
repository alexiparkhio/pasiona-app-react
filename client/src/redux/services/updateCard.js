import axios from 'axios';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const updateCard = async (cardId, body) => {
	try {
		await axios.patch(`http://${DOMAIN}:${PORT}/api/card/${cardId}`, { ...body });
	} catch (error) {
		throw error;
	}
}