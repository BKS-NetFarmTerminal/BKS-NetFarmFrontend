import axios from 'axios';

interface AnimalResponse {

    id: string

}

export const getAnimalFromUser = async (token: string): Promise<AnimalResponse> => {
    try {
        const response = await axios.get<AnimalResponse>(
            'http://xn--80aabgaak7arnpsbwrq3cxg.xn--p1ai:7189/api/User/getAnimalFromUser',
            {
                headers: {
                    'accept': 'text/plain',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Ошибка запроса:', error.response?.status, error.response?.data);
            throw new Error(error.response?.data?.message || 'Ошибка при получении данных');
        }
        console.error('Неожиданная ошибка:', error);
        throw new Error('Неожиданная ошибка');
    }
};

// Пример использования
const token = "your_jwt_token_here";

getAnimalFromUser(token)
    .then(animal => console.log('Получены данные:', animal))
    .catch(error => console.error('Ошибка:', error.message));