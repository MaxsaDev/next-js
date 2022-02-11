import {FC, ReactNode} from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";

type layoutProps = {
    children: ReactNode,
}
export const Layout: FC<layoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};
