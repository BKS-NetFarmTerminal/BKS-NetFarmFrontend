import {Layout} from "@/widgets/layout";
import {useStore} from "@/entities/store";
import {useEffect, useState} from "react";
import {getAnimalFromUser} from "@/pages/pasture/get.ts";


export const Pasture = () => {
    const {walletToken, updateWalletToken,  tok } = useStore();
    const [an, setAn] = useState([]);
    useEffect(() => {


        const a = async () => {
            const animal = await getAnimalFromUser(tok)
            console.log(animal)
            setAn(animal)
        }
        a()

    }, [])
    return (
        <div>
            <Layout>
                <div
                    style={{
                        width: '100%',
                        height: '99vh',
                        display: 'block',
                        backgroundImage: 'url(../../public/green.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100% 100%',
                    }}>

                </div>
            </Layout>
        </div>
    );
};
