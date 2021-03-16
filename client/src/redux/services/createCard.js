import axios from 'axios';
const DOMAIN = process.env.REACT_APP_DOMAIN;

export const createCard = async (body) => {
	try {
		await axios.post(`${DOMAIN}/api/card`, { ...body });
	} catch (error) {
		throw error;
	}
}