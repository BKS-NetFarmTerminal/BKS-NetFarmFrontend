import {ReactNode, FC} from "react";
import {Console} from '@/widgets/console'
import {Buffer} from "@/widgets/buffer";
interface Layout {
    children: ReactNode;
}

export const Layout: FC<Layout> = ({children}) => {
    return (
        <div style={{height: "100vh",width: "100vh", padding: "2em", display: "flex", flexDirection: "row" }}>
            <div >{children}</div>
            <div>
                <div><Buffer/></div>
                <div><Console/></div>
            </div>
        </div>
    );
};
