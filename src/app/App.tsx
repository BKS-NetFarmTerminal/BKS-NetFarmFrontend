// App.tsx
import { Routes, Route } from 'react-router';
import {useEffect} from 'react';
import { Auth } from '@/pages/auth';
import { Hub } from '@/pages/hub';
import {Storage} from '@/pages/storage';
import {Shop} from "@/pages/shop";
import {Field} from "@/pages/field";
import {Pasture} from "@/pages/pasture";
import {Stable} from "@/pages/stable";
import styled from "styled-components";
import {TonConnectButton, toUserFriendlyAddress, useTonWallet} from '@tonconnect/ui-react'
import {useStore} from "@/entities/store";
import {authWithWallet} from "@/pages/auth/auth.tsx";
import {getAnimalFromUser} from "@/pages/pasture/get.ts";

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
    const {walletToken, updateWalletToken, updateBuffer, tok, upTok} = useStore();
    const wallet = useTonWallet()

    useEffect(() => {

    }, []);


    useEffect(() => {

        if (wallet) {
            const authenticate = async () => {
                try {
                    const response = await authWithWallet('7d15bfbc-6032-4d7e-8a4b-3c16962a29ab');
                    await upTok(response.token);
                    // const animal = await getAnimalFromUser(response.token)
                    // console.log(animal)

                    console.log('Auth successful:', response);
                    // Действия после успешной аутентификации
                } catch (error) {
                    console.error('Auth failed:', error);
                    // Обработка ошибки
                }
            };
            const t = toUserFriendlyAddress(wallet.account.address, true);
            authenticate();
            updateWalletToken(t)
            // console.log('Кошелёк подключен! Адрес:', toUserFriendlyAddress(wallet.account.address, true))
        } else {
            console.log('Кошелёк отключен')
            updateWalletToken('')
        }
    }, [wallet])


  // Проверяем авторизацию при изменении состояния кошелька
    // const [tonConnectUI] = useTonConnectUI()

    // const sendTransaction = async () => {
    //     const ton_amount = 0.2
    //     if (!wallet) {
    //         return
    //     }
    //
    //     try {
    //         const transaction = {
    //             validUntil: Math.floor(Date.now() / 1000) + 60, // актуальность транзакции
    //             messages: [
    //                 {
    //                     address: '0QDXGfNik8uZvWmdNyoZWx_ID59TNda-GKpsI7-__uPdd8cm', // адрес получателя - статичен в нашем случае
    //                     amount: (ton_amount * 10 ** 9).toString(), // ton_amount - сюда количество тонов
    //                 },
    //             ],
    //         }
    //
    //         await tonConnectUI.sendTransaction(transaction)
    //         console.log('Транзакция отправлена!')
    //     } catch (error) {
    //         console.error('Ошибка при отправке транзакции:', error)
    //     }
    // }

  return (
  <div style={{ width: '100%',  height: '100%'}}>
      <FloatingDiv $visible={!!walletToken}>
          <TonConnectButton />
      </FloatingDiv>
      <Routes>
        {/* Главная страница */}
        <Route
            path="/"
            element={wallet ? <Hub /> : <Auth />}
        />

        {/* Защищенный маршрут */}
        <Route
            path="/shop"
            element={wallet ? <Shop /> : <Auth />}
        />
          <Route
              path="/storage"
              element={wallet ? <Storage /> : <Auth />}
          />
          <Route
              path="/stable"
              element={wallet ? <Stable /> : <Auth />}
          />
          <Route
              path="/field"
              element={wallet ? <Field /> : <Auth />}
          />
          <Route
              path="/pasture"
              element={wallet ? <Pasture /> : <Auth />}
          />

      </Routes>
  </div>
  );
};
