import {Layout} from "@/widgets/layout";
import {Grid} from "@/shared/grid";

export const Field = () => {
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
                <Grid/>
                </div>
            </Layout>
        </div>
    );
};