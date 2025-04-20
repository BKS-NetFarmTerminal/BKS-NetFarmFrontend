import {Layout} from "@/widgets/layout";
import {Item} from "@/shared/item";

export const Shop = () => {
    return (
        <div>
            <Layout>
                <div
                    style={{
                        width: '100%',
                        height: '99vh',
                        display: 'block',
                        backgroundImage: 'url(../../public/shop.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100% 100%',
                    }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '100px'}}>
                    <div>
                        <Item
                            title='chickenEgg'
                            url="/egg.png"
                        />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                        <Item
                            title='deetSeeds'
                            url="/seeds.png"
                        />
                        <Item
                            title='carrotSeeds'
                            url="/seeds.png"
                        />
                    </div>

                </div>
                </div>
            </Layout>
        </div>
    );
};