import React from 'react';
import {Footer, Navbar} from "./index";

function Layout({children}) {
    return (
        <div className="layout">
            <head>
                <title>Ecommerce Store</title>
            </head>

            <header>
               <Navbar/>
            </header>

            <main className="main-container">
                {children}
            </main>

            <footer>
                <Footer/>
            </footer>

        </div>
    );
}

export default Layout;
