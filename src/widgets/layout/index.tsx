import {ReactNode, FC} from "react";
import {Console} from '@/widgets/console'
import {Buffer} from "@/widgets/buffer";
interface Layout {
    children: ReactNode;
}

export const Layout: FC<Layout> = ({children}) => {
    return (
        <div style={{height: "100vh",width: "100%", display: "flex", flexDirection: "row", flexWrap: 'nowrap' }}>
            <div style={{ width: '80%'}}>{children}</div>
            <div style={{ width: '20%' , border: '1px solid #fff'}}>
                <div><Buffer/></div>
                <div style={{ border: '1px solid #fff'}}><Console/></div>
            </div>
        </div>
    );
};
