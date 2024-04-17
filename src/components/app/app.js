import React from "react";
import './app.scss';
import Header from "../header";
import { Catalog, Product } from "../pages";
import Footer from "../footer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WooRestApi from "../../services/woo-rest-api";
import { WooRestApiProvider } from "../woo-rest-api-context";

const App = () => {
    const wooRestApi = new WooRestApi();
    return (
        <WooRestApiProvider value={ wooRestApi }>
            <Router>
                <Header />
                <Routes>
                    <Route path='/'
                        element={
                            <div className="container">
                                <h1>Cześć!</h1>
                                <Link to="/shop">Sklep</Link>
                            </div>
                        }
                    />
                    <Route path='/shop' element={ <Catalog /> } />
                    <Route path='/product/:id?' element={ <Product /> } />
                    <Route path='*' element={ <h1 className="container">404</h1> } />
                </Routes>
                <Footer />
            </Router>
        </WooRestApiProvider>
    );
};

export default App;