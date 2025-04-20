import {Layout} from "@/widgets/layout";

export const Stable = () => {
    return (
        <div>
            <Layout>
                <div
                    style={{
                        width: '100%',
                        height: '99vh',
                        display: 'block',
                        backgroundImage: 'url(../../public/darkBack.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '100% 100%',
                    }}>

                </div>
            </Layout>
        </div>
    );
};
