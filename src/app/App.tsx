// App.tsx
import { Routes, Route, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Auth } from '@/pages/auth';
import { Hub } from '@/pages/hub';
import styled from "styled-components";
import {TonConnectButton, toUserFriendlyAddress, useTonConnectUI, useTonWallet} from '@tonconnect/ui-react'

const FloatingDiv = styled.div<{ $visible: boolean }>`
  position: fixed;
  ${props => props.$visible
    ? `
      top: 20px;
      right: 20px;
    `
    : `
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
}
  transition: all 0.3s ease;
  z-index: 1000;
`;

export const App = () => {

    const [tonConnectUI] = useTonConnectUI()
    const wallet = useTonWallet()

    useEffect(() => {
        if (wallet) {
            console.log('Кошелёк подключен! Адрес:', toUserFriendlyAddress(wallet.account.address, true))
        } else {
            console.log('Кошелёк отключен')
        }
    }, [wallet])

  const wallet1  = true
  const navigate = useNavigate();

  // Проверяем авторизацию при изменении состояния кошелька
  useEffect(() => {
    if (wallet1) {
      navigate('/'); // Перенаправляем на главную при авторизации
    }
  }, [wallet, navigate]);

    const sendTransaction = async () => {
        const ton_amount = 0.2
        if (!wallet) {
            return
        }

        try {
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 60, // актуальность транзакции
                messages: [
                    {
                        address: '0QDXGfNik8uZvWmdNyoZWx_ID59TNda-GKpsI7-__uPdd8cm', // адрес получателя - статичен в нашем случае
                        amount: (ton_amount * 10 ** 9).toString(), // ton_amount - сюда количество тонов
                    },
                ],
            }

            await tonConnectUI.sendTransaction(transaction)
            console.log('Транзакция отправлена!')
        } catch (error) {
            console.error('Ошибка при отправке транзакции:', error)
        }
    }

  return (
  <div style={{ width: '100%',  height: '100%'}}>
      <FloatingDiv $visible={wallet}>
          <TonConnectButton />
      </FloatingDiv>
      <Routes>
        {/* Главная страница */}
        <Route
            path="/"
            element={wallet ? <Hub /> : <Auth />}
        />

        {/* Защищенный маршрут */}
        {/*<Route*/}
        {/*    path="/storage"*/}
        {/*    element={wallet ? <Storage /> : <Auth />}*/}
        {/*/>*/}
      </Routes>
  </div>
  );
};
