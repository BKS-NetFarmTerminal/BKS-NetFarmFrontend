import axios from 'axios';

// Типизация для тела запроса
interface AuthRequest {
    walletToken: string;
}

// Типизация для ответа (адаптируйте под ваш API)
interface AuthResponse {
    token: string;
}

export const authWithWallet = async (walletToken: string): Promise<AuthResponse> => {
    try {
        const response = await axios.post<AuthResponse>(
            'http://xn--80aabgaak7arnpsbwrq3cxg.xn--p1ai:7189/api/Auth/auth',
            {
                walletToken: walletToken
            } as AuthRequest,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Добавьте другие необходимые заголовки
                }
            }
        );

        return response.data;
    } catch (error) {
        // Обработка ошибок
        if (axios.isAxiosError(error)) {
            console.error('Ошибка запроса:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'Ошибка аутентификации');
        } else {
            console.error('Неожиданная ошибка:', error);
            throw new Error('Неожиданная ошибка');
        }
    }
};

// Пример использования
// const walletToken = "your_wallet_token_here";
//
// authWithWallet(walletToken)
//     .then(response => console.log('Успех:', response))
//     .catch(error => console.error('Ошибка:', error.message));