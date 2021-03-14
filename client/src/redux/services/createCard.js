import axios from 'axios';
const PORT = process.env.REACT_APP_PORT;
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const createCard = async (body) => {
	try {
		await axios.post(`http://${DOMAIN}:${PORT}/api/card`, { ...body });
	} catch (error) {
		throw error;
	}
}