import axios from 'axios';

export const createCard = async (body) => {
	try {
		await axios.post('http://localhost:8085/api/card', { ...body });
	} catch (error) {
		throw error;
	}
}