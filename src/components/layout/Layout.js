import React, {memo} from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = memo(({children}) => {
    return (
        <>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
        </>
    );
});

export default Layout;